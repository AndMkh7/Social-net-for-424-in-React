import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

/*этот store не будет использоваться, но пока что не удаляем,
* наши данные store-а находятся в файле redux-store.js*/

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
                {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
            ],
            newPostText: "Type here please",
        },
        contactsPage: {
            contacts: [
                {id: 0, name: "Rivaldo"},
                {id: 1, name: "Ronaldo"},
                {id: 2, name: "Ronaldinho"},
                {id: 3, name: "R.Carlos"},
                {id: 4, name: "Cafu"},
            ],
            messages: [
                {id: 0, text: "Hi guys, I am from Brazil."},
                {id: 1, text: "Hello , I am too."},
                {id: 2, text: "I am from Rio, guys !!!"},

            ],
            newMessageBody: "",

        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("Hello , rendering")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.contactsPage = dialogsReducer(this._state.contactsPage,action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);





    },

}





