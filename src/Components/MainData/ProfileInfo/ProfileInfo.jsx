import React from "react";
import "./ProfileInfo.module.css"
import style from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://images.pexels.com/photos/159438/android-tv-game-controller-game-controller-video-game-controller-android-game-controller-159438.jpeg"
                    width="700px" alt="mainimg"/>
            </div>
            <div className={style.avatarInfo}>
                Avatar Photo + About
            </div>

        </div>
    );
}

export default ProfileInfo;