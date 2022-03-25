import React from 'react';
import style from "./Contact.module.css";
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return (
        <div className={style.contact} >

            <NavLink to={props.id + "/*"}

                     className={navData => navData.isActive ? style.active : style.contact}>{props.name}

            </NavLink>

        </div>
    )
}

export default Contact;