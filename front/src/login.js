import React 	from 'react';
import {Link}	from 'react-router';
// import {Router, Route, Link} from 'react-router';

export default class Login extends React.Component{

	render() {
		return(
			<div className="auth">
			<div className="content">
				<form className="log-in-form">
					<input type="text" className="Username" title="Username" autoComplete="off" min="5" max="30" placeholder="Username"></input>
					<input type="password" className="password" title="password" autoComplete="off" min="8" max="30" placeholder="Password"></input>
				</form>

			</div>

			<div className="buttons">
			<Link  className="login" to="/login"><div>Login</div></Link>
			<Link  className="sign-in" to="/Signin"><div>Sign-in</div></Link>

			</div>
			</div>
		);
	}
}
