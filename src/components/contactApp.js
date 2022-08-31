import React from "react";
import ContactList from "./contactList";
import { getData } from "../utils/data";
import ContactInput from "./contactInput";

// function ContactApp() {
//     const contacts = getData();

//     return (
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts} />
//         </div>
//     )
// }

class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: getData()
        }

        this.onDeleteContactHandler = this.onDeleteContactHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteContactHandler(id) {
        const contacts = this.state.contacts.filter(contact=> contact.id !== id);
        this.setState({contacts});
    }

    onAddContactHandler({name, username, igUrl, imgUrl}) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        username,
                        igUrl,
                        imgUrl
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="contact-app">
                <ContactInput addContact={this.onAddContactHandler} />
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteContactHandler} />
            </div>
        )
    }
}

export default ContactApp;
