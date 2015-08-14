import React from 'react';

export default class CommentInputBox extends React.Component {

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Say something..." ref="text" />
        </div>
        <input className="btn btn-primary" type="submit" value="Post" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault(); // avoid submit to server

    var text = React.findDOMNode(this.refs.text).value.trim();

    console.log(text);

    if (!text) {
      return;
    }

    this.props.onCommentSubmit(text);

    // TODO: send request to the server
    React.findDOMNode(this.refs.text).value = '';
    return;
  }
}
