import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText , updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let reRender= (state) =>{

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <App state ={state} addPost = {addPost} addMessage = {addMessage} updateNewPostText = {updateNewPostText} updateNewMessageText ={updateNewMessageText} />
            </BrowserRouter>



        </React.StrictMode>,
        document.getElementById('root')
    );

}

export default reRender;

