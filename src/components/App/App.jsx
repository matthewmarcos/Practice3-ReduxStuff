import React, {Component} from 'react';
import axios from 'axios';
import { store } from '../../index';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

class App extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        store.dispatch((dispatch) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: axios.get('/posts')
            });
        })
    }

    render() {
        const { posts, isLoading } = this.props;
        const list = posts.map((post) => {
            return (
                <li>{post.title}</li>
            );
        });
        const spinner = (<Spinner spinnerName="three-bounce" />);
        return (
            <div className="app">
                <h1>Yeah!!!</h1>
                <ol>
                {isLoading ? spinner : list}
                </ol>
            </div>
        );
    }
}

App.defaultProps = {
    isLoading: true,
    posts: []
};

export default connect((store) => {
    const { posts, isLoading } = store.posts;
    return {
        posts, isLoading
    }
})(App);
