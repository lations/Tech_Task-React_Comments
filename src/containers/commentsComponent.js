import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.css';
import { bindActionCreators } from 'redux';
import { getComments } from '../action-creators/FetchComments';
import ShowMore from './showMoreComponent';
import PaginationButtons from './paginationButtons';

class Comments extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const url = `https://jordan.ashton.fashion/api/goods/30/comments?page=${this.props.payload.current_page || 1}`;
        const action = 'GET_COMMENTS'
        this.props.getComments(url,action)
    }

    render() {
        return (
            <div className="comment-container">
                {this.props.comments.map(message =>
                        <div className="comment-message" key={message.id}>
                            <div className="comment-header">
                                <p id = 'name'><i><b>{message.name}</b></i></p>
                                <p><i>{new Date(message.created_at).toUTCString().slice(0,22)}</i></p>
                            </div>
                            <div>
                                <p>{message.text}</p>
                            </div>
                        </div>
                )}
                <ShowMore/>
                <PaginationButtons/> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.mainReducer.comments,
        payload: state.mainReducer.payload
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ getComments }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);