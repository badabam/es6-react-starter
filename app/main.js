require('../css/app.css');

import React from 'react';

class App extends React.Component {
  render() {
    return <div>Hi mom!</div>
  }
}

React.render(<App />, document.getElementById('wrapper'));
