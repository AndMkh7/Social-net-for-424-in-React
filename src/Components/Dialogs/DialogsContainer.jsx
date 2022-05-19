import React from "react";
import {sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
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
        contactsPage: state.contactsPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        sendMessage :(newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
};

const DialogsContainer = connect(mapStateToProps ,mapDispatchToProps )(Dialogs)

export default DialogsContainer;