import React			from 'react';

const Lol = ({lol}) => <div>{lol}</div>

class Test extends React.Component {

	componentWillReceiveProps = (newProps) => {
		this.setState({ test: newProps.test });
	}

	componentWillMount() {
		this.setState({ test: this.props.test });
	}

	render() {
		const { test } = this.state;
		return (
			<div>{test}</div>
		);
	}
}

export default class Header extends React.Component {

	state = {
		first: 'coucou12',
		second: 'lol',
	}

	changeValues = (e) => {
		e.preventDefault();
		this.setState({ first: 'coucou13' });
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ second: 'lol1231232321321' });
		}, 5000);
		setTimeout(() => {
			this.setState({ second: 'lol1231' });
		}, 10000);
	}

	render() {
		const { first, second } = this.state;
		return (
			<div className="header" onClick={this.changeValues}>
				<div>{first}</div>
				<div>cocuocuoc235</div>
				<Lol lol="4" />
				<Test test={second}/>
			</div>
		);
	}
}
