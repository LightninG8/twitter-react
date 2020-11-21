import React from "react";
import PropTypes from "prop-types";

import "./post-list-item.css";

class PostListItem extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        important: PropTypes.bool,
    };
    onImportant() {
        this.setState(state => ({
            isImportant: !state.isImportant,   
        }));
    }
    onLiked() {
        this.setState(state => ({
            isLiked: !state.isLiked,   
        }));
    }
    constructor(props) {
        super(props);

        this.state = {
            isImportant: false,
            isLiked: false
        };

        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);
    }
    render() {
        const {label} = this.props;
        const {isImportant, isLiked} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";

        if (isImportant) {
            classNames += " important";
        }

        if (isLiked) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span className="app-list-item-label" onClick={this.onLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" type="button" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button" >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart" ></i>
                </div>
            </li>
        );
    }
    
}

export default PostListItem;