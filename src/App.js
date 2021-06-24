import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {changeApp} from './Redux/dispatcher'

import './App.css';
import Home from './Component/Home';
import NavBar from './Component/NavBar';

const HomeMain = ()=>{
  return(
    <div className="home-fixed"><Home /></div>
  )
}

const PageNotFound = ()=>{
  return(
    <div className="home-fixed"><h1>Page Not Found</h1></div>
  )
}


function App() {
  // changeApp("/home")
  return (
    <div className="main-full">
      <div className="nav-fixed"><NavBar /></div>
      <Switch>
        <Route path="/" component={HomeMain} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
