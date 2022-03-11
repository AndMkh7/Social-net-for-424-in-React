import React from "react";
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import {sendMessageCreator ,updateNewMessageBodyCreator } from "../../redux/contacts-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().contactsPage;
    let newMessageElement = React.createRef();

    let contact = state.contacts.map(contact => <Contact
        name={contact.name} id={contact.id}/>);

    let message = state.messages.map(message => <Message
        text={message.text}
    />);

    let newMessageBody = state.newMessageBody;


    let onSendMessage = () =>{

        props.dispatch(sendMessageCreator({type : "SEND-MESSAGE"}));

    };

    let onMessageChange =(body)=>{

        props.store.dispatch(updateNewMessageBodyCreator(body));


    }

    return  (
        <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessage}
                 contactsPage={state}/>
    )
};

export default DialogsContainer;