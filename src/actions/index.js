import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = "http://localhost:4000/";

export function createUser(props) {
	console.log("props: ", props);
	localStorage.setItem('crazy_id_token', 'mesettingacrazyidtoken');
	/*
	var posturl = `${ROOT_URL}users`;
	var data = new FormData();
	data.append( "json", JSON.stringify( props ) );
	fetch(posturl, {
    		method: 'POST',
    		headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
    		body: data
		})
		.then(
			function(res){ console.log("first then")}
		)
		.then(
			function(data){ console.log("second then")}
		);
	*/
	const request = axios.post(`${ROOT_URL}users`,props);
	console.log("creating user : ", props);
	console.log('request');
	
	console.log(localStorage.getItem('crazy_id_token'));

	return {
		type: CREATE_USER,
		payload: request
	};
}

export function getAllUsers() {
	console.log("Get all users");
	const request = axios.get(`${ROOT_URL}users`);
	console.log(request);
	return {
		type: GET_USERS,
		payload: request
	};
}

export function getUser(id) {
	const request = axios.get(`${ROOT_URL}users/:id`);
	console.log(request);
	return {
		type: GET_USER,
		payload: request
	};
}

export function deleteUser(id) {
	console.log(id);
	const request = axios.delete(`${ROOT_URL}users/${id}`);
	
	console.log("deleting user");
	console.log(request);
	return {
		type: DELETE_USER,
		payload: request
	};
}

/*
export function deleteUser(id) {
	console.log(id);
	const request = axios.delete(`${ROOT_URL}users/${id}`);
	const getrequest = axios.get(`${ROOT_URL}users`);
	console.log("deleting user");
	console.log(getrequest);
	return {
		type: DELETE_USER,
		payload: getrequest
	};
}
*/

