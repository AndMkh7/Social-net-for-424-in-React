import React from 'react';

import './App.css';
import Header from "./Header/Header.js";
import MainData from './MainData/MainData';
import LeftSidebar from './LeftSidebar/LeftSidebar';

const App = () => {
  return (
    <div className="App">
      <Header className ="header"/>
      <LeftSidebar  className = "leftside"/>
      <MainData className = "maindata"/>
      
    </div>
  );
}

export default App;

