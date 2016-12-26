import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_TYPE_1': {
            return state;
        }
        case 'ACTION_TYPE_2': {
            return state;
        }
        default: {
            return state;
        }
    }
}

const postsReducerInitialState = {
    isLoading: false,
    posts: []
};

const postsReducer = (state = postsReducerInitialState, action) => {

    switch (action.type) {
        case 'FETCH_POSTS': {
            return state;
        }
        case 'FETCH_POSTS_PENDING': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'FETCH_POSTS_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                posts: [
                    ...action.payload.data
                ]
            };
        }
        default: {
            return state;
        }
    }
}

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
});

const middleware =applyMiddleware(promise(), thunk, logger());

export const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
