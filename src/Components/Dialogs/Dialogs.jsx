import React from "react";
import style from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.contacts}>
                <Contact name = "Rivaldo" id= "1"/>
                <Contact name = "Ronaldo" id = "2" />
                <Contact name = "Ronaldinho" id = "3" />
                <Contact name = "R.Carlos" id = "4" />
                <Contact name = "Cafu" id = "5" />
            </div>
            <div className={style.messages}>
                <Message text = "Hi guys, I am from Brazil." />
                <Message text = "Hello , I am too." />
                <Message text = "I am from Rio, guys !!!" />

            </div>

        </div>

    );
}

export default Dialogs;