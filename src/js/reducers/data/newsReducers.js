import { handleActions } from 'redux-actions';
import {
    GETALL_NEWS
} from '../../constants/actionTypes';
import {
	NewsState
} from '../../constants/models';

const newsReducers = handleActions({
	GETALL_NEWS: (state, { payload }) => (
		state.merge({
			data: payload.data,
		})
	),
}, NewsState);

export default newsReducers;
