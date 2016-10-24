import React 	from 'react';
import {Link}	from 'react-router';
import axios from 'axios';
// import {Router, Route, Link} from 'react-router';

export default class Signin extends React.Component{

	signin = (event)  => {
		event.preventDefault();
		console.log(event.target.email.value);
		axios({
				url: 'http://localhost:8080/register',
				method: 'post',
				origin: 'http://localhost:3000',
				'content-type': 'application/x-www-form-urlencoded',
				data: {
					username: event.target.username.value,
					email: event.target.email.value,
					emailRe: event.target.email_check.value,
					firstName: event.target.firstName.value,
					lastName:  event.target.lastName.value,
					password:  event.target.password.value,
					passwordRe:  event.target.passwordRe.value,
					birthdate:  event.target.birthdate.value,
				},


			}).then(({ data }) => {
					console.log(data);
			});
	}

	render() {
		return(
			<div className="auth">
			<div className="content">
				<form className="sign-in-form" onSubmit={this.signin}>
					<label for="email"> email</label>
					<input type="email"  className="email" name="email" autoComplete="on" placeholder="Email"/>
					<label for="email_check">Type your email again</label>
					<input type="email" className="emailRe" name="email_check" autoComplete="on" placeholder="Type Email Again"/>
					<label for="username"> username</label>
					<input type="text" className="username" name="username" autoComplete="on" min="5" max="30" placeholder="Username"/>
					<label for ="firstName"> First Name</label>
					<input type="text" className="firstName" name="firstName" autoComplete="on" min="2" max="30" placeholder="First Name"/>
					<label for="lastName"> Last Name</label>
					<input type="text" className="lastName" name="lastName" autoComplete="on" min="2" max="30" placeholder="Name"/>
					<label for="birthdate"> birthdate</label>
					<input type="date" className="birthdate" name="birthdate" autoComplete="on" min="1945-01-01" max="1998-31-12"/>
					<label for="password"> password</label>
					<input type="password" className="password" name="password" autoComplete="on" min="8" max="30" placeholder="Password"/>
					<label for = "passwordRe"> type your Password again</label>
					<input  type="password" className="passwordRe" name="passwordRe" autoComplete="on" min="8" max="30" placeholder="Type Password Again"/>
					<input  type="submit" className="submit" name="submit"></input>

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
