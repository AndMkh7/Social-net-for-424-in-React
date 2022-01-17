import React from "react";
import "./Post.module.css"
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://img.a.transfermarkt.technology/portrait/big/3372-1588239928.jpg?lm=1" alt=""/>
            {props.massage}
            <div>
                <span>Like {props.likescount}</span>
            </div>
        </div>

    );
}

export default Post;