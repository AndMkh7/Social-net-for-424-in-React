const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
        sidebar: {}
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
        if (action.type === ADD_POST) {

            let newPost = {
                id: this._state.profilePage.posts.length,
                postText: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.contactsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.contactsPage.newMessageBody ;
            this._state.contactsPage.newMessageBody = "";
            this._state.contactsPage.messages.push({id:6 /*this._state.contactsPage.messages.length*/, text: body})
            this._callSubscriber(this._state);
        }


    },

}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

window.store = store;

export default store;