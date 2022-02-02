import React from "react";
import "./ProfileMainData.module.css"
import style from "./ProfileMainData.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

const ProfileMainData = (props) => {
    debugger ;
    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts = {props.profileState.posts} addPost = {addPost}/>

        </div>
    );
}

export default ProfileMainData;