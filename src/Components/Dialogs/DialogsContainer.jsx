import React from "react";
import {sendMessageCreator ,updateNewMessageBodyCreator } from "../../redux/contacts-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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

    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage :()=>{
            dispatch(sendMessageCreator({type : "SEND-MESSAGE"}));
        }
    }
};


export default compose (connect(mapStateToProps ,mapDispatchToProps ),
                        withAuthRedirect,
                        )(Dialogs);