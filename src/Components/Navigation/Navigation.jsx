import React from "react";
import style from "./Navigation.module.css" ;
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (

        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink to="/profile"
                         className = { navData => navData.isActive ? style.active : style.item }>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? style.active : style.item}>Massages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/users"
                         className={navData => navData.isActive ? style.active : style.item}>Users</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/photos"
                         className={navData => navData.isActive ? style.active : style.item}>Photos</NavLink>
            </div>

            <div className={style.item}>
                <a href="https://www.youtube.com/channel/UCsDfLz1LDi0q1VvoOGn9NJg/videos"
                   className={style.item}> Videos </a>
            </div>

            <div className={style.item}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
            </div>


        </div>


    );
}
export default Navigation;