import React from "react";

// function ContactItemImage({ imgUrl, tag }){
//     return (
//         <div className="contact-item__image">
//             <img src={imgUrl} alt={tag} />
//         </div>
//     );
// };

class ContactItemImage extends React.Component{
    render() {
        const { imgUrl, tag } = this.props;

        return (
            <div className="contact-item__image">
                <img src={imgUrl} alt={tag} />
            </div>
        )
    }
}

export default ContactItemImage;