import React, {Component} from "react";
import PropTypes from "prop-types";

import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
    static propTypes = {
        filter: PropTypes.string,
        onFilterSelect: PropTypes.func
    };
    constructor(props) {
        super(props);

        this.buttons = [
            {name: "all", label: "Все"},
            {name: "like", label: "Понравилось"},
        ];
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
      
            const classNames = `btn ${active  ? "btn-info" : "btn-outline-secondary"}`;
            return (
                <button key={name} type="button" className={classNames} onClick={() => this.props.onFilterSelect(name)}>{label}</button>  
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
    
}