import { combineReducers } from 'redux';

import { postsReducer } from './PostsReducer';
import { userReducer } from './UserReducer';

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
});

export default reducers;
