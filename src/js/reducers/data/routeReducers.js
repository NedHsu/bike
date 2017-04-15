import { handleActions } from 'redux-actions';
import {
    
} from '../../constants/actionTypes';
import {
	RouteState
} from '../../constants/models';

const routeReducers = handleActions({
	GETALL_NEWS: (state, { payload }) => (
		state.merge({
			data: payload.data,
		})
	),
}, RouteState);

export default routeReducers;