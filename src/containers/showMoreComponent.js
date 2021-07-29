import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.css';
import { bindActionCreators } from 'redux';
import { getComments } from '../action-creators/FetchComments';

class ShowMore extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        const url =  `https://jordan.ashton.fashion/api/goods/30/comments?page=${this.props.payload.current_page + 1}`;
        const action = 'GET_MORE_COMMENTS'
        this.props.getComments(url,action)
    }

    render() {
        return (
        <span className="input-group-btn">
          <button 
            type="submit" 
            className="btn btn-secondary btn-lg btn-block" 
            onClick = {this.handleClick}
            style = {{ display: this.props.payload.current_page ===  this.props.payload.last_page ? "none" : "block"  }}
            >
                Show More Comments
            </button>
        </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        payload: state.mainReducer.payload
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ getComments }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);