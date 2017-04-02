import { GET_USER , GET_USERS , DELETE_USER } from '../actions/index';

const INITIAL_STATE = {
	all: [],
	current_user: null,
	loggedin: null
}


export default function(state = INITIAL_STATE, action) {

	switch(action.type) {
		
		case GET_USERS: 
		
			return { ...state, all: action.payload.data };

		case DELETE_USER:
			console.log("deleteuserreducer");
			return { ...state, all: action.payload.data };
		
		default:
		
			return state;

	}

}









