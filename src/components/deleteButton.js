import React from "react";


class DeleteButton extends React.Component {
    render() {
        const {id, onDelete} = this.props;

        return (
            <button className="contact-item__delete" onClick={() => onDelete(id)}>X</button>
        )
    } 
}

export default DeleteButton;