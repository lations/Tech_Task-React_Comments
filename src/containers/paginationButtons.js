import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.css';
import { bindActionCreators } from 'redux';
import { getComments } from '../action-creators/FetchComments';

class PaginationButtons extends Component {
    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(event) {
        event.preventDefault();
        const url = event.target.value;
        const action = 'GET_COMMENTS'
        this.props.getComments(url,action)
    }

    render() {
        return (
            <div className="pagination-buttons" onClick={this.handleClick} >
                {this.props.payload.links.map((page,index) => 
                        <button 
                            key = {index} type="submit"
                            style = {{ display: page.url ? "block" : "none" }} 
                            value = {page.url} 
                            className= {page.active === true ? "btn btn-primary":"btn btn-secondary"}
                        >
                            {Number.isInteger(page.label) ? page.label : 
                                page.label.indexOf('Next') ? "\u00AB Previous" :  'Next \u00bb' }
                        </button>
                    )}    
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PaginationButtons);