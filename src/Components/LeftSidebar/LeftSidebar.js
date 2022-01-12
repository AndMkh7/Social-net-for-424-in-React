import React from "react";
import style from "./LeftSidebar.module.css" ;

const LeftSidebar = () =>{
    return (

                <div className = {style.leftside}>
                    <div className ={style.item}>
                        <a href="/profile">Profile</a>
                    </div>

                    <div className ={` ${style.item} ${style.active}`}>
                        <a href="/dialogs">Massages</a>
                    </div>

                    <div className = {style.item}>
                        <a href="/news">News</a>
                    </div>

                    <div className = {style.item}>
                        <a href="/photos">Photos</a>
                    </div>

                    <div className = {style.item}>
                        <a href="https://www.youtube.com/channel/UCsDfLz1LDi0q1VvoOGn9NJg/videos" > Videos</a>
                    </div>

                    <div className = {style.item}>
                        <a href="/settings">Settings</a>
                    </div>


                </div>




    );
}
export default LeftSidebar;