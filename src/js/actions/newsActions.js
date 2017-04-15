import 'whatwg-fetch';
import {
	GETALL_NEWS,
	GET_NEWS
} from '../constants/actionTypes';

export const getNews = () =>{
	return (dispatch) =>{
		console.log('test getNews');
		dispatch({ type: GETALL_NEWS, payload:{data:[1,2,3]} });
	}
}

export const getNewsDetail = (id) =>{
	return (dispatch) =>{
		console.log('test getNewsDetail');
		dispatch({ type: GET_NEWS, id });
	}
}