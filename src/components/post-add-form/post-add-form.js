import React from "react";

import "./post-add-form.css";

function PostAddForm() {
    return (
        <form action="" className="bottom-panel d-flex">
            <input 
                className="form-control new-post-label"
                type="text"
                placeholder="О чём вы думаете сейчас?"
            />
            <button 
                className="btn btn-outline-secondary"
                type="submit">
                Добавить</button>
        </form>
    );
}

export default PostAddForm;