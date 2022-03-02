import React from "react";
import "./ProfileMainData.module.css"
import style from "./ProfileMainData.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const ProfileMainData = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     dispatch = {props.dispatch}

            />


        </div>
    );
}

export default ProfileMainData;