import React from "react";

function ContactItemImage({ imgUrl, tag }){
    return (
        <div className="contact-item__image">
            <img src={imgUrl} alt={tag} />
        </div>
    );
};

export default ContactItemImage;