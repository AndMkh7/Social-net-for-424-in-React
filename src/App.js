import React from 'react';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import ProfileMainData from './Components/MainData/ProfileMainData';
import Navigation from './Components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {

    return (

            <div className="app">
                <Header/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>
                        <Route path="/profile/*" element={<ProfileMainData
                                store={props.store}

                        />
                        }/>

                        <Route path="/dialogs/*" element={<DialogsContainer
                            store = {props.store}

                        />}/>
                        <Route path="/users/*" element={<UsersContainer /> }/>

                        <Route path="/news/*" element={""}/>

                        <Route path="/photos/*" element={""}/>

                        <Route path="/settings/*" element={""}/>
                    </Routes>

                </div>
            </div>

    )
}


export default App;
