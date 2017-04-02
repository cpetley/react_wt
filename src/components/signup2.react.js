import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import { createUser } from '../actions/index';


class SignUp extends Component {

	constructor(props){
		super(props);
	}

	static contextTypes = {
		router: PropTypes.object//will look for router in all parents
	};
	
	onSubmit(props) {
		console.log("onSubmit function");
		console.log(this.props);
		console.log(this.props.createUser);
		this.props.createUser(props)//returning a promise
			.then(() => {
				//blog post has been created, nav to index
				//nav by calling this.context.push with new path
				
				console.log("done it");
				//this.context.router.push('/');
			});
			
	}

	render() {
		const { fields: { name, password }, handleSubmit } = this.props;

		return (
			

			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<h3>Sign Up</h3>
				
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type="text" className="form-control" {...password} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			

			</form>

		);
	}
}

export default reduxForm({
	form: 'SignUpForm',
	fields: ['name', 'password'],
}, null, { createUser })(SignUp);





