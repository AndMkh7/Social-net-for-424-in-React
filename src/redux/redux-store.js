import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import contactsReducer from "./contacts-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    contactsPage:contactsReducer,
    sidebar:sidebarReducer,
    usersPage : usersReducer,
    auth:authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;