import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import contactsReducer from "./contacts-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    contactsPage:contactsReducer,
    sidebar:sidebarReducer,
});

let store = createStore(reducers);
export default store;