import React from 'react';
import { Component } from 'react';

import CommentsForm from '../containers/formController';
import Comments from '../containers/commentsComponent';

export default class App extends Component {
  render() {
    return (
        <div>
            <CommentsForm/>
            <Comments />
        </div>
    );
  }
}
