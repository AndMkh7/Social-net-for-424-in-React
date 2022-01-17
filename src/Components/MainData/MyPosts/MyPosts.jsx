import React from "react";
import "./MyPosts.module.css"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";

const MyPosts = () => {
    return (
        <div>
            <div className={style.mypost}>
                My Posts
            </div>

            <div className={style.buttons}>

                <div>
                    <textarea className={style.textarea}> Type here </textarea>
                </div>


                <button className={style.add}> Add post</button>
                <button className={style.delete}> Delete</button>
            </div>


            <div className={style.posts}>

                <Post massage="Our first match of thi՝s season is  in Monday 21th February " likescount="30"/>
                <Post massage="Our second match of this season is  in Sunday 27th February" likescount="15"/>


            </div>


        </div>
    );
}

export default MyPosts;