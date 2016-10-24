import React 	from 'react';
import {Link}	from 'react-router';
import axios	from 'axios';
// import {Router, Route, Link} from 'react-router';

export default class Login extends React.Component{

	state = {
		validAddress : null
	}

	checkAddress = async (e) =>
	{
		e.preventDefault();
		const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.address.value}`)
		console.log(response.data.results[0].formatted_address);
		this.setState({ validAddress: response.data.results[0].formatted_address })
		// axios({
		// 	url: 'https://maps.googleapis.com/maps/api/geocode/json',
		// 	method: 'get',
		// 	data: {
		// 		address: e.target.address.value,
		// 	},
		// }).then(({ data }) => {
		// 	console.log(data);
		// })
	}

	render() {
		const { validAddress } = this.state;
		return(
			<form onSubmit={this.checkAddress}>
				<input type="text" name="address" autoComplete="off" min="5" max="30" ></input>
				<input type="submit"  title="password" autoComplete="off" min="8" max="30"  value='Check Address'></input>
				<span>{validAddress}</span>
			</form>
		);
	}
}
