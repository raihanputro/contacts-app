import React from "react";
import ContactList from "./contactList";
import { getData } from "../utils/data";

function ContactApp() {
    const contacts = getData();

    return (
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default ContactApp;
