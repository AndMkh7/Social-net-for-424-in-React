import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 0, postText: "Our first match of thi՝s season is  in Monday 21th February ", likesCount: 30},
    {id: 1, postText: "Our second match of this season is  in Sunday 27th February", likesCount: 12},
];

let contacts = [
    {id: 0, name: "Rivaldo"},
    {id: 1, name: "Ronaldo"},
    {id: 2, name: "Ronaldinho"},
    {id: 3, name: "R.Carlos"},
    {id: 4, name: "Cafu"},
];


let messages = [
    {id: 0, text: "Hi guys, I am from Brazil."},
    {id: 1, text: "Hello , I am too."},
    {id: 2, text: "I am from Rio, guys !!!"},

];

ReactDOM.render(
    <React.StrictMode>
        
        <App posts = {posts} contacts = {contacts} messages = {messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

