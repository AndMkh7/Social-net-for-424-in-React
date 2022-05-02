import {profileAPi as profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
        {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
    ],
    newPostText: "Type here please",
    profile:null,
    status : "",
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

        case SET_STATUS: {

            return {
                ...state,
                status : action.status
            }
        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile : action.profile
            }
        }
        default :
            return state;


    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch)=>{
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export const getStatus = (userId) => (dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        });
};





export default profileReducer;