import { createStore } from 'redux';

import {AppReducer} from './Reducer';
import {setIconState} from '../Component/context'


function GetStore(reducer){
	const store=createStore(reducer);
	store.subscribe(setIconState(store.getState().page))
	return store;
}

export const Subscribe=(store,func)=>{
	store.subscribe(()=>func)
}

export const AppStore = GetStore(AppReducer)