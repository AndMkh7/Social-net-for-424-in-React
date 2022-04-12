import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <a href="https://pespro.net/team/424-2/">

                    <img id="img" src="https://pespro.net/wp-content/uploads/2020/05/424esports7-300x300.png"
                         alt="424image"/>
                </a>
                <div className={style.loginBlock}>
                    {props.isAuth ? props.login :<NavLink to={`/login`}>LogIn</NavLink> }

                </div>

            </div >


        </header>

    );
}

export default Header;