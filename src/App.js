import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/MainData/ProfileContainer";
import Profile from "./Components/MainData/Profile";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {

    return (

            <div className="app">
                <HeaderContainer/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>

                        <Route path="/profile/*" element={<Profile
                            store={props.store}
                        />}/>

                        <Route path="/profile/:userId" element={<ProfileContainer
                                store={props.store}
                        />
                        }/>
                       {/* <Route path='/profile' element={<ProfileContainer />} />*/}

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
