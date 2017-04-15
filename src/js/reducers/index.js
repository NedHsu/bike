import { combineReducers } from 'redux-immutable';
//import memory from './data/memoryReducers';// import routes from './routes';
import news from './data/newsReducers';// import routes from './routes';
import route from './data/routeReducers';// import routes from './routes';
import team from './data/teamReducers';// import routes from './routes';

const rootReducer = combineReducers({
  news
});
// ,
//   memory,
//   route,
//   team
export default rootReducer;