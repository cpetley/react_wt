import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createUser } from '../actions/index';
import { Link } from 'react-router-dom';


class SignUp extends Component {
	//<form onSubmit={handleSubmit(this.submitMyForm.bind(this))} >
	static contextTypes = {
		router: PropTypes.object
	};
	
	submitMyForm(props) {
		console.log("onSubmit function");
		console.log( createUser); 
		console.log(this.props.createUser);
		console.log(this.createUser(props));

		this.props.createUser(props)
			.then(() => {
				console.log("done it");
			});			
	}

	render() {
		const { handleSubmit, fields: { name, password } } = this.props;

		return (
			
			<div>

			<form onSubmit={handleSubmit(this.submitMyForm.bind(this))} >
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


			</div>
		);
	}
}


export default reduxForm({
	form: 'SignUpForm',
	fields: ['name', 'password']
}, null, { createUser })(SignUp);






