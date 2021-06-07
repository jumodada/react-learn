import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../views/Recommend/store/index';
import { reducer as singersReducer } from '../views/Singers/store/index';
import { reducer as rankReducer } from '../views/Rank/store/index';

export default combineReducers ({
    recommend: recommendReducer,
    singers: singersReducer ,
    rank: rankReducer
});
