import React from "react";
import style from "./LeftSidebar.module.css" ;

const LeftSidebar = () =>{
    return (

                <div className = {style.leftside}>
                    <div className ={style.item}>
                        <a href={style.profile}>Profile</a>
                    </div>

                    <div className ={` ${style.item} ${style.active}`}>
                        <a href={style.massage}>Massages</a>
                    </div>

                    <div className = {style.item}>
                        <a href={style.news}>News</a>
                    </div>

                    <div className = {style.item}>
                        <a href={style.news}>Photos</a>
                    </div>

                    <div className = {style.item}>
                        <a href="https://www.youtube.com/channel/UCsDfLz1LDi0q1VvoOGn9NJg/videos" > Videos</a>
                    </div>

                    <div className = {style.item}>



                        <a href={style.news}>Settings</a>
                    </div>


                </div>




    );
}
export default LeftSidebar;