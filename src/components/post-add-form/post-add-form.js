import React, {Component} from "react";
import PropTypes from "prop-types";

import "./post-add-form.css";

export default class PostAddForm extends Component {
    static propTypes = {
        onAddPost: PropTypes.func
    };
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        };
    }
    onValueChange = e => {
        this.setState({
            text: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();

        const {onAddPost} = this.props;
        const {text} = this.state;

        onAddPost(text);

        this.setState(() => ({
            text: "",
        }));
    };
    render() {
        const {text} = this.state;

        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    className="form-control new-post-label"
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    onChange={this.onValueChange}
                    value={text}
                />
                <button 
                    className="btn btn-outline-secondary"
                    type="submit"
                    >
                    Добавить</button>
            </form>
        );
    } 
}
