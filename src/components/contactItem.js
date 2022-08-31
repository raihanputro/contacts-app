import React from "react";
import ContactItemBody from "./contactItemBody";
import ContactItemImage from "./contactItemImage";
import DeleteButton from "./deleteButton";

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
        const {imgUrl, name, username, igUrl, id, onDelete} =  this.props;

        return (
            <div className="contact-item">
                <ContactItemImage imgUrl={imgUrl} />
                <ContactItemBody name={name} username={username} igUrl={igUrl} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        )
    }
}


export default ContactItem;