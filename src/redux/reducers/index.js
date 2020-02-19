//  in case we need more reducers
import {combineReducers} from 'redux';
import marvelHeros from './marvelHeros';
import loading from './loading';

export default combineReducers({
  marvelHeros,
  loading,
});
