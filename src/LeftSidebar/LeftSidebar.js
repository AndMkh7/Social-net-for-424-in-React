import React from "react";
import s from "./LeftSidebar.module.css" ;

const LeftSidebar = () =>{
    return (
        <div className = {s.leftside}>
            <div className ={s.item}>
                <a href={s.profile}>Profile</a>
            </div>

            <div className ={` ${s.item} ${s.active}`}>
                <a href={s.massage}>Massages</a>
            </div>

            <div className = {s.item}>
                <a href={s.news}>News</a>
            </div>

            <div className = {s.item}>
                <a href="https://www.youtube.com/channel/UCsDfLz1LDi0q1VvoOGn9NJg/videosl" > Videos</a>
            </div>


        </div>

    );
}
export default LeftSidebar;