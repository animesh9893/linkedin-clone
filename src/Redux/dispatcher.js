import * as functions from './actions';
import {AppStore} from './store';

export const changeApp = URL => AppStore.dispatch({
	type:functions.APP_CHANGE,
	URL
})

export const getAppURL = function(){
	return AppStore.getState().page
}