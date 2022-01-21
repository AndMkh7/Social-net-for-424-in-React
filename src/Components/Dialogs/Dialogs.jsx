import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let contact = props.contacts.map(contact => <Contact name={contact.name} id={contact.id}/>);
    let message = props.messages.map(message => <Message text={message.text}/>);

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