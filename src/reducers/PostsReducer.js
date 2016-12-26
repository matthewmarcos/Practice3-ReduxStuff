const postsReducerInitialState = {
    isLoading: false,
    posts: []
};

export const postsReducer = (state = postsReducerInitialState, action) => {
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
        case 'FETCH_POSTS_REJECTED': {
            return {
                ...state,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
}
