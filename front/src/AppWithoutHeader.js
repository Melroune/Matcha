import React, { Component } from 'react';
import Auth from './test';
import '../css/authentification.css';


class App extends Component {
  render() {
    return (
      <div className="App">
	  <Auth/>
	  {this.props.children}
      </div>
    );
  }
}

export default App;
