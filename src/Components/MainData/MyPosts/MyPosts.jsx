import React from "react";
import "./MyPosts.module.css"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";



const MyPosts = (props) => {




 let newPostElement = React.createRef();



 let addNewPost = () =>{
     props.addPost();
     props.updateNewPostText("");
 };

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }


    let post = props.posts.map(p => <Post postText={p.postText} likesCount={p.likesCount}/>);



    return (
        <div>
            <div className={style.mypost}>
                My Posts
            </div>


            <div className={style.buttons}>

                <div>

                    <textarea className={style.textarea}  ref ={newPostElement} onChange = {onPostChange} value = {props.newPostText} />

                </div>


                
                <button className={style.add }  onClick = { addNewPost} > Add post</button>
                <button className={style.delete}> Delete</button>
            </div>


            <div className={style.posts}>

                {post}


            </div>


        </div>
    );
}

export default MyPosts;