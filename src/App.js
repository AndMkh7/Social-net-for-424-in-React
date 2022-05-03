import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/MainData/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = (props) => {

    return (

            <div className="app">
                <HeaderContainer/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>

                        <Route path="/profile/:userId/" element={<ProfileContainer
                                store={props.store}
                        />
                        }/>


                        <Route path="/dialogs/*" element={<DialogsContainer
                            store = {props.store}

                        />}/>


                        <Route path="/users/*" element={<UsersContainer /> }/>

                        <Route path="/login/" element={<Login store={props.store} /> } />


                        <Route path="/news/!*" element={""}/>

                        <Route path="/photos/!*" element={""}/>

                        <Route path="/settings/!*" element={""}/>
                    </Routes>

                </div>
            </div>

    )
}


export default App;

/*
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/MainData/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

function App(props) {
    return (
        <div className='app'>
            <HeaderContainer />
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer
                        store = {props.store} />
                    }/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path="/users/!*" element={<UsersContainer /> }/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/settings/!*" element={""}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;*/
