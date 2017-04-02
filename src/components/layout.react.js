import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import LoginControl from './LoginControl.react';
import SendItUpTest from './sendituptest.react';
import Header from './header.react';

class Layout extends Component {

	constructor(props) {
		super(props);
		this.state = { clicked: false };
		this.changestatus = this.changestatus.bind(this);
	}

	changestatus() {
		console.log(this.state);
		if (this.state.clicked) {
			this.setState({
				clicked: false
			});
		} else {
			this.setState({
				clicked: true
			});
		}
		console.log("Sending back: ", this.state.clicked);
	}


	render() {
		console.log(this.state);
		return (
			<div>
                <Header />
				

				<div className="actualpage" >

					{this.props.children}

				</div>

				<footer>
					some footer stuff
				</footer>

			</div>
		);
	}
}

export default Layout;


