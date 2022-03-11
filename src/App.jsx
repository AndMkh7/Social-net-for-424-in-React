import React from 'react';

import './App.css';
import Header from "./Components/Header/Header.jsx";
import ProfileMainData from './Components/MainData/ProfileMainData';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

    return (

            <div className="app">
                <Header/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>
                        <Route path="/profile/*" element={<ProfileMainData
                                store={props.store}
                            /*profilePage={props.state.profilePage}
                            dispatch = {props.dispatch }*/

                        />
                        }/>

                        <Route path="/dialogs/*" element={<DialogsContainer
                            store = {props.store}

                            contactsPage = {props.state.contactsPage}
                            dispatch = {props.dispatch }
                        />}/>

                        <Route path="/news/*" element={<ProfileMainData
                            profileState={props.state.profilePage}/>}/>

                        <Route path="/photos/*" element={<ProfileMainData
                            profileState={props.state.profilePage}/>}/>

                        <Route path="/settings/*" element={<ProfileMainData
                            profileState={props.state.profilePage}/>}/>
                    </Routes>

                </div>
            </div>

    )
}


export default App;
