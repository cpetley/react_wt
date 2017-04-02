import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../actions/index';
import { Link } from 'react-router-dom';

class AllUsers extends Component {
	
	constructor(props){
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	};
	

	componentWillMount() {
		console.log("getting all user data");
		console.log(this.props);

		this.props.getAllUsers();
		console.log(this.props.users);
	}

	onDeleteClick(user) {
		console.log("ondeleteclick");
		console.log(user);
		this.props.deleteUser(user.id)
			.then(() => {
				this.props.getAllUsers();
				console.log("deleted!");
			});
	}



	renderUserList() {
		if (!this.props.users){
			return (
				<div>Loading...</div>
			);
		}
		return this.props.users.map((user) => {
			console.log(user);
			return (
				<div>
				<Link to={"allusers/" + user.id} key={"Link"+ user.id}>
					<li key={user.id}>
						<span>{user.id} , {user.name}, {user.password}</span>
					</li>
				</Link>
				<button 
						className="btn btn-danger pull-right"
						onClick = {this.onDeleteClick.bind(this, user)}
						id = {user.id} >

						Delete this user
				</button>
				</div>
			);
		});
	}

	render() {
		return (
			<div>List of all users

				{this.renderUserList()}

			</div>
		);
	}
}

function mapStateToProps(state) {
	//its users, because of the reducer variable
	console.log(state.users.all);
	return { users: state.users.all };
}

export default connect(mapStateToProps, { getAllUsers , deleteUser })(AllUsers);




