import React from 'react';

import CommentsList from './CommentsList';
import CommentInputBox from './CommentInputBox';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        "ejdjs",
        "sdfsdfsd",
        "hello"
      ]
    };
  }

  handleCommentSubmit(comment) {
    var newComments = this.state.comments.concat([comment]);
    this.setState({comments: newComments});
  }

  render() {
    return (
      <div>
        <p><CommentsList data={this.state.comments}/></p>
        <p><CommentInputBox onCommentSubmit={c => this.handleCommentSubmit(c)}/></p>
      </div>
    );
  }

}
