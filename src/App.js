import React from 'react';
import {Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Component/Home';
import NavBar from './Component/NavBar';

import {UserCardProvider,GroupCardProvider,RecentCardProvider} from './state/homeSidebarContext';
import {IconBarProvider} from './state/contextURL';

function App() {

  return (
    <UserCardProvider>
    <GroupCardProvider>
    <IconBarProvider>
    <RecentCardProvider>

      <div className="main-full">
        <div className="nav-fixed"><NavBar /></div>
        <Switch>
          <Route path="/" component={HomeMain} exact />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      
    </RecentCardProvider>
    </IconBarProvider>
    </GroupCardProvider>
    </UserCardProvider>
  );
}

export default App;


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

