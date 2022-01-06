import React from "react";
import "./MyPosts.module.css"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post.js";

const MyPosts = () =>{
    return (
        <div>
            <div className = {style.mypost}>
                My Posts
            </div>

            <div>
                <textarea className ={style.textarea}> Type here </textarea>
                <button className = {style.add}> Add post </button> <button className ={style.delete}> Delete </button>
            </div>



            <div className = {style.posts}>

                <Post massage = "Our first match of this season is  in Monday 21th February " />
                <Post massage = "Our second match of this season is  in Sunday 27th February" />
            </div>



        </div>
    );
}

export default MyPosts;