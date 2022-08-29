import React from "react";
import ContactItemBody from "./contactItemBody";
import ContactItemImage from "./contactItemImage";

// function ContactItem({ imgUrl, name, tag, igUrl }){
//     return (
//         <div className="contact-item">
//             <ContactItemImage imgUrl={imgUrl} />
//             <ContactItemBody name={name} tag={tag} igUrl={igUrl} />
//         </div>
//     );
// };

class ContactItem extends React.Component{
    constructor(props) {
        super(props);
        console.log('Contact item created!');
    }

    render(){ 
        const {imgUrl, name, tag, igUrl} =  this.props;

        return (
            <div className="contact-item">
                <ContactItemImage imgUrl={imgUrl} />
                <ContactItemBody name={name} tag={tag} igUrl={igUrl} />
            </div>
        )
    }
}


export default ContactItem;