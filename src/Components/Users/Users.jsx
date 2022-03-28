import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.png"

let Users = (props) => {
    if (props.users.length === 0){/*
        props.setUsers([
            {
                id: 1,
                photoUrl: "http://www.footballtop.ru/sites/default/files/styles/player_full/public/photos/coaches/carlo-ancelotti.jpg?itok=JN6vfpFo",
                followed: false,
                fullName: "Anchelotti",
                status: "I am a coach",
                location: {country: "Italy", city: "Milano"}
            },
            {
                id: 2,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg/342px-Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg",
                followed: true,
                fullName: "Klop",
                status: "I am a coach assistant",
                location: {country: "Germany", city: "Dortmund"}
            },
            {
                id: 3,
                photoUrl: "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article23220379.ece/ALTERNATES/s810/0_GettyImages-1238589476.jpg",
                followed: false,
                fullName: "Pep",
                status: "I am a coach assistant too",
                location: {country: "Spain", city: "Barcelona"}
            },
        ])*/

        axios.get("https://social-network.samuraijs.com/api/1.0/users").
        then(response=>{
           props.setUsers(response.data.items)
        });
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                     <span>
                        <div>
                            <img src={u.photos.small!=null ? u.photos.small:userPhoto} className={styles.userPhoto} alt={""}/>
                        </div>
                         <div>


                             {u.followed ?
                                 <button onClick={() => {
                                     props.unfollow(u.id)
                                 }}>UnFollow</button> :
                                 <button onClick={() => {
                                     props.follow(u.id)
                                 }}>Follow</button>}


                         </div>
                     </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                     </span>
                </div>
            )
        }
    </div>

}

export default Users;