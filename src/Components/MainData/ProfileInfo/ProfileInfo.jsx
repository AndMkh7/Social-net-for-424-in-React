import React from "react";
import "./ProfileInfo.module.css"
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div >
            <div>
                <img
                    src="https://images.pexels.com/photos/159438/android-tv-game-controller-game-controller-video-game-controller-android-game-controller-159438.jpeg"
                    width="700px" alt="mainmg"/>

            </div>
            <div className={style.avatarInfo}>
                <img src={props.profile.photos.large} alt=""/>
            </div>

            <div> Name -  {props.profile.fullName}</div>
        </div>
    );
}

export default ProfileInfo;