import reRender from "../reRender";

let state = {
    profilePage: {
        posts: [
            {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
            {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
        ],
        newPostText : "Type here please" ,
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
    }
}

export let addPost =()=>{

    let newPost = {
        id :state.profilePage.posts.length,
        postText : state.profilePage.newPostText ,
        likesCount : 0,
    };
    state.profilePage.posts.push(newPost);
    reRender(state);
}

export let updateNewPostText =(newText)=>{


    state.profilePage.newPostText = newText;
    reRender(state);
}





export default state;