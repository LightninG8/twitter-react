import React, {Component} from "react";
import PropTypes from "prop-types";

import "./app-header.css";

export default class AppHeader extends Component {
    static propTypes = {
        likedPostsCount: PropTypes.number,
        allPostsCount: PropTypes.number,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const {likedPostsCount, allPostsCount} = this.props;
        return (
            <div className="app-header d-flex">
                <h1>Aleksey Kessler</h1>
                <h2>{allPostsCount} записей, из них понравилось {likedPostsCount}</h2>
            </div>
        );
    }
}

