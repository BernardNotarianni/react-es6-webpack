import React from 'react';


import CommentBox from './CommentBox';

require('./style/style.less');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-md-12">
          <h1>Chat on React ES2015 Boostrap webpack</h1>
          <p>This is my very first application with Reactjs</p>
          <p><CommentBox/></p>
        </div>
      </div>
    );
  }
});

export default App;
