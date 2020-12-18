import React from "react";
import PropTypes from "prop-types";

import PostListItem from "../post-list-item";

import "./post-list.css";

class PostList extends React.Component {
    static propTypes = {
        posts: PropTypes.array,
        onDelete: PropTypes.func,
        onToggleImportant: PropTypes.func,
        onToggleLike: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const {posts, onDelete, onToggleLike, onToggleImportant} = this.props;

        const postsList = posts.map(elem => {
            const {id, ...elemProps} = elem;
            
            return (
                <li className="list-group-item" key={id}>
                    <PostListItem {...elemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLike={() => onToggleLike(id)}
                    />
                </li>     
            );
        });
        return (
            <ul className="app-list list-group">
                {postsList}
            </ul>
        );
    }
    
}

export default PostList;