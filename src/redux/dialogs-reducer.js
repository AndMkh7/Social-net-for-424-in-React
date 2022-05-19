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
 };

const dialogsReducer = (state = initialState, action)=> { //параметрыпо умолчанию
    switch (action.type) {

        case SEND_MESSAGE :{

            let body = action.newMessageBody;
            let newMessageText = state.messages.push({id: state.messages.length, text: body});

            return {
                ...state,
                massages : [newMessageText],
            };
        }
        default:
            return state;
    }
};
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});


export default dialogsReducer;