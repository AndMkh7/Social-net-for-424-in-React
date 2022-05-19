import React from "react";
import {addPostActionCreator  } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*Инсталлируем библиотеку react-redux в наш проект.
  С помощю супер-функции connect(1)(2) , который существует в библиотеке react-redux ,
  создаем контейнерную компоненту DialogsContainer
  в (2) передаем ту презентационную компоненту(Dialogs, MyPosts), вокруг которой мы создаем контейнерную
  компоненту (DialogsContainer, MyPostsContainer) .
  А в (1) передаем функции (mapStateToProps ,mapDispatchToProps ), которые  возвращают пропсы презентационного
  компонента (Dialogs, MyPosts) */


let mapStateToProps =(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText :state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        addPost :(newPostText)=>{
          dispatch(addPostActionCreator(newPostText));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps ,mapDispatchToProps )(MyPosts);

export default MyPostsContainer;