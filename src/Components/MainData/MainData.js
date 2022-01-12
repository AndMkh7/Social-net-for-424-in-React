import React from "react";
import "./MainData.module.css"
import style from "./MainData.module.css";
import MyPosts from "./MyPosts/MyPosts";

const MainData = () =>{
    return (
        <div >
            <div>
                <img src = "https://images.pexels.com/photos/159438/android-tv-game-controller-game-controller-video-game-controller-android-game-controller-159438.jpeg" width="700px" alt= "mainimg"/>
            </div>
            <div className = {style.item}>
                Avatar Photo + About 
            </div>

            <MyPosts/>


        </div>
    );
}

export default MainData;