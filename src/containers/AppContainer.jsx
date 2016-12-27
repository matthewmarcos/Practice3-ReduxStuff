import React, {Component} from 'react';
import { connect } from 'react-redux';

import Spinner from 'react-spinkit';
import * as posts from '../actions/PostsActions';
import * as Components from '../components';

class AppContainer extends Component {

    componentWillMount() {
        this.props.dispatch((dispatch) => {
            dispatch(posts.fetchPosts());
        });
    }

    whatToRender() {
        const { posts, isLoading } = this.props;
        const { List } = Components;

        const list = posts.map((post, key) => {
            return (
                <li key={key}>{post.title}</li>
            );
        });

        const listComp = (<List posts={posts} />);
        const spinner = (<Spinner spinnerName="rotating-plane" />);

        if(isLoading) {
            return spinner;
        }
        else {
            return list;
        }
    }

    render() {
        return (
            <div className="app-container container">
                <h1>Yeah!!!</h1>
                <ol>
                {this.whatToRender()}
                </ol>
            </div>
        );
    }
}

AppContainer.defaultProps = {
    isLoading: true,
    posts: []
};

export default connect((store) => {
    const { posts, isLoading } = store.posts;
    return {
        posts, isLoading
    }
})(AppContainer);
