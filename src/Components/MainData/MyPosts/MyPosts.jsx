import React from "react";
import "./MyPosts.module.css"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";
import {Field, reduxForm} from "redux-form";
import  {required,maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

 let posts = props.posts.map(p => <Post postText={p.postText} likesCount={p.likesCount} key={p.id}/>);


 let addNewPost = (values) =>{
     props.addPost(values.newPostText);

 };

    return (
        <div >
            <div className={style.myPost}>
                My Posts
            </div>


            <div className={style.buttons}>
                <AddNewPostFormRedux onSubmit={addNewPost}/>
            </div>

            <div className={style.posts}>
                {posts}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props)=>{
    return(

        <form onSubmit={props.handleSubmit}>
            <div>

                <Field component={Textarea} name={"newPostText"} placeholder={"Post your text"}
                       validate={[required, maxLength10]}/>

            </div>

            <div>
                <button className={style.add }  > Add post</button>
                <button className={style.delete}> Delete</button>
            </div>

        </form>
    )}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddPostForm"})(AddNewPostForm);

export default MyPosts;