import React, { Component } from 'react';

class LoginControl extends Component {

	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		console.log("handleLoginClick");
		this.setState({ 
			isLoggedIn: true 
		});
	}

	handleLogoutClick() {
		console.log("handleLogoutClick");
		this.setState({ 
			isLoggedIn: false 
		});
	}


	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;

		if (isLoggedIn) {
			console.log("not logged in");
			button = <button 
						onClick={this.handleLogoutClick}
						className="btn btn-success">
						Log out
					</button>;
		} else {
			console.log("logged in");
			button = <button onClick={this.handleLoginClick}
						className="btn btn-success">
						Log in
					</button>;
		}

		return (
			<div>
				
				{button}

			</div>
		);
	}
}

export default LoginControl;





