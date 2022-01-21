import React from "react";
import "./ProfileMainData.module.css"
import style from "./ProfileMainData.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileMainData = (props) => {
    debugger ;
    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>

        </div>
    );
}

export default ProfileMainData;