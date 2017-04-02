import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class SignUp extends Component {

	constructor(props){
		super(props);

		this.state = {
			name: 'claire',
			password: 'claire'
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	};

	onInputChange(event){
		console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		});
	}


	onFormSubmit(event){
		event.preventDefault();
		console.log("onSubmit function");
		
		this.props.createUser(this.state)//returning a promise
			.then(() => {
				//blog post has been created, nav to index
				//nav by calling this.context.push with new path
				
				console.log("done it");
				//this.context.router.push('/');
			});
	}

	render() {
		
		return (
			
			<form onSubmit={this.onFormSubmit} >
				<h3>Sign Up</h3>
	
				<div className="form-group">
					<label>Name</label>
					<input
						name="name" 
						type="text" 
						className="form-control"
						onChange={this.onInputChange} />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input 
						name="password"
						type="text" 
						className="form-control"
						onChange={this.onInputChange} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			
			</form>

		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);
