import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppWithoutHeader from './AppWithoutHeader';
import Signin from './signin';
import Login from './login';
import './index.css';
import Check from './check';
import '../css/header.css';
import '../css/login.css';
import '../css/signin.css';
import { Route, Router, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
	  <Route path="/" component={AppWithoutHeader}></Route>
	  <Route path="/login" component={Login}></Route>
	  <Route path="/check" component={Check}></Route>
	  <Route path="/Signin" component={Signin}>
	 </Route>
  </Router>,
  document.getElementById('root')
);
