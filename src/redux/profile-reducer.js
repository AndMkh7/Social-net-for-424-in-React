const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
        {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
    ],
    newPostText: "Type here please",
};

const profileReducer = (state=initialState, action)=> {//параметрыпо умолчанию
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.length,
                postText: state.newPostText,
                likesCount: 0,
            };
            return{
                ...state,
                posts : [...state.posts , newPost],
                newPostText : ""
            };



        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText : action.newText
            }
        }
        default :
            return state;


    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;