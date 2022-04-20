import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {


    const state = props?.contactsPage;


    let newMessageElement = React.createRef();

    let contact = state.contacts.map(contact => <Contact
        name={contact.name} id={contact.id} key ={contact.id}/>);

    let message = state.messages.map(message => <Message
        text={message.text} key ={message.id}
    />);

    let newMessageBody = state.newMessageBody;


    const onSendMessage = () =>{

        props.sendMessage();
    };


    let onMessageChange =(e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Navigate to={ "/login"}/>;

    return (

        <div className={style.dialogs} >


            <div className={style.contacts}>
                {contact}
            </div>

            <div className={style.messages}>
                <div> {message} </div>
                <div>

                    <textarea  ref ={newMessageElement}
                               onChange = {onMessageChange} value = {newMessageBody}/>

                    <button className={style.send} onClick = {onSendMessage} > Send </button>

                </div>
            </div>

        </div>

    );
}


export default Dialogs;