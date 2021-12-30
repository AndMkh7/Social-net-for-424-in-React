import React from "react";
import "./MyPosts.css"
import s from "./MyPosts.css";
import Post from "./Posts/Post.js";

const MyPosts = () =>{
    return (
        <div>
            <textarea>Type here</textarea>
            <div>
                <button>Add post</button> <button> Delete</button>
            </div>



            <div className = {s.posts}>
                My Posts
            </div>
            <div>
                <Post/>
                <Post/>
            </div>


        </div>
    );
}

export default MyPosts;