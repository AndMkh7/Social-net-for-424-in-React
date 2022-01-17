import React from 'react';

import './App.css';
import Header from "./Components/Header/Header.jsx";
import ProfileMainData from './Components/MainData/ProfileMainData';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>
                        <Route path="/profile/*" element={<ProfileMainData/>}/>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/news/*" element={<ProfileMainData/>}/>
                        <Route path="/photos/*" element={<ProfileMainData/>}/>

                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
