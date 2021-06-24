import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';


import React,{useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import * as functions from '../../Redux/actions';
import {changeApp,getAppURL} from '../../Redux/dispatcher'
import {AppStore,Subscribe} from '../../Redux/store'

import {GetIconState} from '../context';

const Icon = (props)=>{
  return (
    <Link to={props.link} onClick={()=>changeApp(props.link)} style={{ color: "#000000E6", textDecoration: 'none'}}>
    <IconContainer>
      <props.icon style={{fontSize:30}}/>
      <div>{props.name}</div>
      {props.active ? <ActiveLine /> : <Padding/>}
    </IconContainer>
    </Link>
  )
}


function IconBar(){

	return (
        <Container>
          <Icon icon={HomeIcon} active={GetIconState()===functions.home} name={"Home"} link={functions.home}/>
          <Icon icon={PeopleIcon} active={GetIconState()===functions.network} name={"My Network"} link={functions.network}/>
          <Icon icon={WorkIcon} active={GetIconState()===functions.jobs} name={"Jobs"} link={functions.jobs}/>
          <Icon icon={TextsmsIcon} active={GetIconState()===functions.message} name={"Messaging"} link={functions.message}/>
          <Icon icon={NotificationsIcon} active={GetIconState()===functions.notification} name={"Notification"} link={functions.notification}/>

        </Container>
	)
}


export default IconBar;

const Container= styled.div`
  // padding-top:1px;
  // border:1px solid black;
  display:flex;
  align-items:flex-end;
  flex-direction:row;
  :hover{
    cursor:pointer;
  }
`

const IconContainer = styled.div`
  height:52px;
  width:80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:12px;

`

const ActiveLine = styled.div`
  padding-top:4px;
  width:80px;
  border-bottom:2px solid red;
`

const Padding = styled.div`
  padding-top:2px;
`