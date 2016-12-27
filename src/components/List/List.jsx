import React, {Component} from 'react';

class List extends Component {

    render() {
        const { posts } = this.props;

        const list = posts.map((post, key) => {
            return (
                <li key={key}>{post.title}</li>
            );
        });

        return (
            <div className="list">
                <h1>Yeah!!!</h1>
                <ol>
                { list }
                </ol>
            </div>
        );
    }
}

List.defaultProps = {
    isLoading: true,
    posts: []
};
