import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import reRender from "../../reRender";


const Dialogs = (props) => {


    let newMessageElement = React.createRef();

    let contact = props.dialogsState.contacts.map(contact => <Contact
        name={contact.name} id={contact.id}/>);
    let message = props.dialogsState.messages.map(message => <Message
        text={message.text}
    />);

    let addNewMessage = () =>{
        let text = newMessageElement.current.value;
        props.addMessage(text);
        props.updateNewMessageText("");
    };

    let onMessageChange =()=>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
        /*props.updateNewMessageText("");*/

    }






    return (

        <div className={style.dialogs}>


            <div className={style.contacts}>
                {contact}
            </div>

            <div className={style.messages}>
                {message}

                <textarea  ref ={newMessageElement} onChange = {onMessageChange} value = {props.newMessageText}/>

                <button className={style.add} onClick = {addNewMessage} > Send </button>

            </div>



        </div>

    );
}

export default Dialogs;