import React from 'react';
import _ from 'underscore';

export default class CommentsList extends React.Component {
  render() {
    var comments = this.props.data;
    var zipped = _.zip(_.range(comments.length), comments);
    return (
      <div>
        {zipped.map(function (z) {
          return (
            <p key={z[0]}>{z[1]}</p>
          );
        })}
      </div>
    );
  }
}
