const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

};

const contactsReducer = (state = initialState, action)=> { //параметрыпо умолчанию
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :{

            return {
                ...state,
                newMessageBody : action.body,
            };
        }
        case SEND_MESSAGE :{

            let body = state.newMessageBody;
            let newMessageText = state.messages.push({id: state.messages.length, text: body});

            return {
                ...state,
                newMessageBody : "",
                massages : [/*...state.messages,*/ newMessageText],

            };
        }
        default:
            return state;


    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});


export default contactsReducer;