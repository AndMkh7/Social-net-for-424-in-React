import React from "react";
import "./ProfileMainData.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const ProfileMainData = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                /*posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     dispatch = {props.dispatch}*/

            />


        </div>
    );
}

export default ProfileMainData;