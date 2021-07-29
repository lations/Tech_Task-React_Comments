import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../action-creators/FetchComments';
import { getComments } from '../action-creators/FetchComments';

class CommentsForm extends React.Component {
    constructor(props){
        super(props)
         this.changeHandler = this.changeHandler.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeHandler (event) {
        if (event.target.name === 'name')
        {
          this.nick.value = event.target.value
        }
        else if ( event.target.name === 'text')
        {
            this.msg.value = event.target.value
        }
    }

    handleSubmit (event) {
        event.preventDefault();
        const value = {
            name: this.nick.value,
            text: this.msg.value
        };
        const url = 'https://jordan.ashton.fashion/api/goods/30/comments';
        const method = 'POST';
        const page = `https://jordan.ashton.fashion/api/goods/30/comments?page=${this.props.payload.current_page}`
        const action = 'GET_COMMENTS'
        if (!value.name || !value.text) {
            alert('Please fill the input.');
            return;
        }
        
        this.nick.value = '';
        this.msg.value = '';
        fetchData(url,value,method);
        this.props.getComments(page,action);
    }

    render() {
        return (
        <form className="input-group" onSubmit={this.handleSubmit} >
            <input className="form-control" placeholder="Enter your name" name = 'name' ref ={node => this.nick = node} onChange={this.changeHandler} />
            <input className="form-control" placeholder="Enter comment text" name = 'text' ref ={node => this.msg = node} onChange={this.changeHandler} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary" >Submit</button>
            </span>
        </form>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
