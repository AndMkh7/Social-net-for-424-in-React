import React from 'react';

import './App.css';
import Header from "./Components/Header/Header.jsx";
import ProfileMainData from './Components/MainData/ProfileMainData';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>
                        <Route path="/profile/*" element={<ProfileMainData profileState={props.state.profilePage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs         dialogsState = {props.state.contactsPage}/>}/>
                        <Route path="/news/*" element={<ProfileMainData profileState={props.state.profilePage}/>}/>
                        <Route path="/photos/*" element={<ProfileMainData profileState={props.state.profilePage}/>}/>
                        <Route path="/settings/*" element={<ProfileMainData profileState={props.state.profilePage}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
