import * as functions from './actions';
// import { createStore } from 'redux';

export const AppReducer =(state={page:"/"}, action )=>{
	switch(action.type){
		case functions.APP_CHANGE:
			return {
				...state,
				page:action.URL
			}
		default:
			return state;
	}
}


