import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";


const Dialogs = () => {

    let contacts = [
        {id: 0, name: "Rivaldo"},
        {id: 1, name: "Ronaldo"},
        {id: 2, name: "Ronaldinho"},
        {id: 3, name: "R.Carlos"},
        {id: 4, name: "Cafu"},
    ];


    let messages = [
        {id: 0, text: "Hi guys, I am from Brazil."},
        {id: 1, text: "Hello , I am too."},
        {id: 2, text: "I am from Rio, guys !!!"},

    ];

    let contact = contacts.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let message = messages.map(message => <Message text={message.text}/>);

    return (

        <div className={style.dialogs}>


            <div className={style.contacts}>
                {contact}
            </div>

            <div className={style.messages}>
                {message}

            </div>
        </div>

    );
}

export default Dialogs;