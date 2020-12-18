import React, {Component} from "react";
import PropTypes from "prop-types";

import "./search-panel.css";

export default class SearchPanel extends Component {
    static propTypes = {
        onUpdateSearch: PropTypes.func,
    };
    constructor(props) {
        super(props);

        this.state = {
            term: "",
        };
    }
    onUpdateSearch = e => {
        const {onUpdateSearch} = this.props;
        const term = e.target.value;

        this.setState(() => ({
            term: term,
        }));

        onUpdateSearch(term);

    };
    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        );
    }
    
}
