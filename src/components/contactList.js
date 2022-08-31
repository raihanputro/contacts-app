import React from "react";
import ContactItem from "./contactItem";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />
                ))
            }
        </div>
    );
};

// class ContactList extends React.Component {
//     render() {
//         const { contacts, onDelete } =  this.props;


//         return (
//             <div className="contact-list">
//                 {contacts.map((contact) => (<ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />))}
//             </div>
//         )
//     }
// }


export default ContactList;