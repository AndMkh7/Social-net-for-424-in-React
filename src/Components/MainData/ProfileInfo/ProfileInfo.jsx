import React from "react";
import "./ProfileInfo.module.css"
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div >
            <div>
                {/*<img
                    src="https://images.pexels.com/photos/159438/android-tv-game-controller-game-controller-video-game-controller-android-game-controller-159438.jpeg"
                    width="700px" alt="mainImg"/>*/}

            </div>
            <div> Username -  {props.profile.fullName} </div>

            <div className={style.avatarInfo}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            </div>


        </div>
    );
}

export default ProfileInfo;

