import React from "react";
import ContactItem from "./contactItem";

// function ContactList({ contacts }) {
//     return (
//         <div className="contact-list">
//             {
//                 contacts.map((contact) => (
//                 <ContactItem key={contact.id} {...contact} />
//                 ))
//             }
//         </div>
//     );
// };

class ContactList extends React.Component {
    render() {
        const { contacts } =  this.props;


        return (
            <div className="contact-list">
                {contacts.map((contact) => (<ContactItem key={contact.id} {...contact} />))}
            </div>
        )
    }
}


export default ContactList;