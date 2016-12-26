import React, {Component} from 'react';
import { connect } from 'react-redux';

import Spinner from 'react-spinkit';
import * as posts from '../../actions/PostsActions';

class App extends Component {

    componentWillMount() {
        this.props.dispatch((dispatch) => {
            dispatch(posts.fetchPosts());
        });
    }

    render() {
        const { posts, isLoading } = this.props;
        const list = posts.map((post, key) => {
            return (
                <li key={key}>{post.title}</li>
            );
        });
        const spinner = (<Spinner spinnerName="rotating-plane" />);

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
