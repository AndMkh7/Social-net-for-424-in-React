import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import {sendMessageCreator ,updateNewMessageBodyCreator } from "../../redux/state.js";



const Dialogs = (props) => {

    let state = props.store.getState().contactsPage;
    let newMessageElement = React.createRef();

    let contact = state.contacts.map(contact => <Contact
        name={contact.name} id={contact.id}/>);

    let message = state.messages.map(message => <Message
        text={message.text}
    />);

    let newMessageBody = state.newMessageBody;




    let sendMessage = () =>{

        props.dispatch(sendMessageCreator({type : "SEND-MESSAGE"}));

    };

    let onMessageChange =(e)=>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));


    }






    return (

        <div className={style.dialogs}>


            <div className={style.contacts}>
                {contact}
            </div>

            <div className={style.messages}>
                <div> {message} </div>
                <div>

                    <textarea  ref ={newMessageElement}
                               onChange = {onMessageChange} value = {newMessageBody}/>

                    <button className={style.send} onClick = {sendMessage} > Send </button>

                </div>
            </div>



        </div>

    );
}

export default Dialogs;