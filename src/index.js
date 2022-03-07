import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let reRender= () =>{

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <App state ={store.getState()}
                     dispatch = {store.dispatch.bind(store)}
                     store = {store}
                      />
            </BrowserRouter>



        </React.StrictMode>,
        document.getElementById('root')
    );

}


reRender(store.getState());
store.subscribe(reRender);
