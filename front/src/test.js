import React 	from 'react';
import {Link}	from 'react-router';
// import {Router, Route, Link} from 'react-router';

export default class Auth extends React.Component{

	render() {
		return(
			<div className="auth">
			<div className="content">Welcome to Blind Match</div>


			<div className="buttons">
			<Link  className="login" to="/login"><div>Login</div></Link>
			<Link  className="sign-in" to="/Signin"><div>Sign-in</div></Link>
			</div>
			</div>
			
		);
	}
}
