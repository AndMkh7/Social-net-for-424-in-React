import React from 'react';

import './App.css';
import Header from "./Components/Header/Header.js";
import MainData from './Components/MainData/MainData';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {
    return (
        <BrowserRouter>
                <div className="app">
                    <Header/>
                    <Navigation/>
                        <div className='app.content'>

                            <Routes>
                                <Route path="/dialogs" element={<Dialogs/>}/>
                                <Route path="/profile" element={<MainData/>}/>
                                <Route path="/news" element={<MainData/>}/>
                                <Route path="/photos" element={<MainData/>}/>

                            </Routes>

                        </div>
                </div>
        </BrowserRouter>
            )
    }


export default App;
