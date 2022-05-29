import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/MainData/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/preloader";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class App extends React.Component {
    componentDidMount() {

        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (

            <div className="app">
                <HeaderContainer/>
                <Navigation/>
                <div className='app.content'>

                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>


                        <Route path="/dialogs/*" element={<DialogsContainer
                            store={this.props.store}

                        />}/>

                        <Route path="/users/*" element={<UsersContainer/>}/>

                        <Route path="/login/" element={<Login store={this.props.store}/>}/>


                        <Route path="/news/*" element={""}/>

                        <Route path="/photos/*" element={""}/>

                    </Routes>

                </div>
            </div>

        )
    }
}

const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})

export default compose(withRouter,connect(mapStateToProps,{initializeApp }))(App) ;