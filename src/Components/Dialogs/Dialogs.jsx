import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    const state = props?.contactsPage;

    let contact = state.contacts.map(contact => <Contact
        name={contact.name} id={contact.id} key ={contact.id}/>);

    let message = state.messages.map(message => <Message
        text={message.text} key ={message.id}
    />);

    let addNewMessage =(values)=>{
       props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Navigate to={ "/login"}/>;

    return (
        <div className={style.dialogs} >

            <div className={style.contacts}>
                {contact}
            </div>

            <div className={style.messages}>
                <div> {message} </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}



export default Dialogs;