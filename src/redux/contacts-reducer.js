const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const contactsReducer = (state, action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: state.messages.length, text: body});
            return state;
        default:
            return state;


    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});


export default contactsReducer;