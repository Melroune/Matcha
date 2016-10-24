import React, { Component } from 'react';
// import logo from './logo.svg';\
// import {Router, Route} from 'react-router';
import Header from './Header';
import Auth from './test';
import Footer from './footer';
// import '../css/header.css';
// import '../css/footer.css';
import '../css/auth.sass';


class App extends Component {
  render() {
    return (
      <div className="App">
	  <Header />
	  <Auth/>
	  {this.props.children}
	  <Footer/>
      </div>
    );
  }
}

export default App;
