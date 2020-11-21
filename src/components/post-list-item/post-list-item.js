import React from "react";
import PropTypes from "prop-types";

import "./post-list-item.css";

class PostListItem extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        important: PropTypes.bool,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const {label, important} = this.props;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }

        return (
            <li className={classNames}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" type="button">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        );
    }
    
}

export default PostListItem;