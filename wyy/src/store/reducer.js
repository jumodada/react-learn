import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../views/Recommend/store/index';

export default combineReducers ({
    recommend: recommendReducer,
});
