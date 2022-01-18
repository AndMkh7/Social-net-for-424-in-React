import React from "react";
import "./MyPosts.module.css"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";

const MyPosts = () => {

    let posts = [
        {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
        {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
    ];

    let post = posts.map(p => <Post postText={p.postText} likesCount={p.likesCount}/>);

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

                {post}


            </div>


        </div>
    );
}

export default MyPosts;