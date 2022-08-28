import React from "react";

function ContactItemBody({ name, tag, igUrl}){
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__name">{name}</h3>
            <a href={igUrl} target="_blank" rel="noopener noreferrer">@{tag}</a>
        </div>
    );
};

export default ContactItemBody;