import React from "react";
import PropTypes from "prop-types";

import "./post-list-item.css";

class PostListItem extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        important: PropTypes.bool,
        onDelete: PropTypes.func,
        onToggleImportant: PropTypes.func,
        onToggleLike: PropTypes.func,
        isImportant: PropTypes.bool,
        isLiked: PropTypes.bool,
    };

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, isImportant, isLiked} = this.props;

        let classNames = "app-list-item d-flex justify-content-between";

        if (isImportant) {
            classNames += " important";
        }

        if (isLiked) {
            classNames += " like";
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" type="button" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart" ></i>
                </div>
            </div>
        );
    }
    
}

export default PostListItem;