import React, { Component } from 'react';

class SendItUpTest extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		//this.state = { clicked: false };
	}

	notClickedClick() {
		console.log("notClickedClick");
	} 

	ClickedClick() {
		console.log("ClickedClick");
	}

	handleChange() {
		this.props.onButtonClick();
	}



	render() {
		console.log(this.props.clicked);
		let result = null;
		if (this.props.clicked){
			result = <h1>Definitely clicked</h1>;	
		} else {
			result = <h1>Definitely not clicked</h1>;
		}
		return (
			<div>
			<div>Send it up test!</div>
			<button
				className = "btn btn-warning"
				onClick = {this.handleChange}>
				This should change the result
			</button>


			<h1>{result}</h1>

			</div>

		);
	}

}

export default SendItUpTest;