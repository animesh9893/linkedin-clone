import React,{useState} from 'react'

import {GlobeIcon,PeoplesIcon,TargetIcon} from '../../../common/icons'

export const State = () =>{
	// this is for first opeing modal open/close
	const [modalIsOpen,setModalIsOpen] = useState(false);
    // this is for second user selection modal open/close
    const [userSelectionModal,setUserSelectionModal] = useState(false);
	// postfor modal 
    const [postForModal,setPostForModal] = useState(false);
    // this is data for we can post as
	const [postAs,setPostAs] = useState([
        {
            id:1,
            name:"Animesh Shrivatri",
            profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            type:"user",
            options:[
                {id:1,heading:"Anyone",logo:GlobeIcon,discription:"Anyone on or off Linkedin"},
                {id:2,heading:"Anyone + Twitter",logo:GlobeIcon,discription:"Anyone on or off Linkedin post to Twitter"},
                {id:3,heading:"Connections Only",logo:PeoplesIcon,discription:"Connections on Linkedin"}
            ]
        },
        {
            id:2,
            name:"Tree With U",
            profile:"https://cdn.dribbble.com/users/1577045/screenshots/4914645/dribble_pic.png?compress=1&resize=400x300",
            type:"page",
            options:[
                {id:1,heading:"Anyone",logo:GlobeIcon,discription:"Anyone on or off Linkedin"},
                {id:2,heading:"Targeted audience",logo:TargetIcon,discription:"Select an audiance to target"}
            ]           
        },
        {
            id:3,
            name:"Tree With U",
            profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            type:"page",
            options:[
                {id:1,heading:"Anyone",logo:GlobeIcon,discription:"Anyone on or off Linkedin"},
                {id:2,heading:"Targeted audience",logo:TargetIcon,discription:"Select an audiance to target"}
            ]            
        }
    ])
    // this is selected post user
    const [postUser,setPostUser] = useState(1);
    // this is for selecting post user after save postUser also change by function
    const [postAsUser,setPostAsUser] = useState(postUser);
    // this is for who can see post
    const [postFor,setPostFor] = useState(1)
    const [postForUser,setPostForUser] = useState(postFor);
    // functions for state
    const setModalIsOpenToTrue =()=>{setModalIsOpen(true)}
    const setModalIsOpenToFalse =()=>{setModalIsOpen(false)}
    
    const setUserSelectionModalTrue = () =>{setUserSelectionModal(true);setModalIsOpenToFalse()}
    const setUserSelectionModalFalse = () =>{setUserSelectionModal(false);setModalIsOpenToTrue()}
    
    function onClickBack(){setModalIsOpen(true);setPostAsUser(postUser);setUserSelectionModal(false);}
    function onClickSave(){
        if(postUser!=postAsUser){setPostUser(postAsUser);setModalIsOpen(true);setUserSelectionModal(false);}
    }

    const setPostForModalTrue = () =>{setPostFor(true);setModalIsOpenToFalse()}
    const setPostForModalFalse = () =>{setPostFor(false);setModalIsOpenToTrue()}

    return [modalIsOpen,setModalIsOpen,
    		userSelectionModal,setUserSelectionModal,
    		postAs,setPostAs,
    		postUser,setPostUser,
    		postAsUser,setPostAsUser,
    		setModalIsOpenToTrue,
    		setModalIsOpenToFalse,
    		setUserSelectionModalTrue,
    		setUserSelectionModalFalse,
    		onClickBack,onClickSave,
            postFor,setPostFor,
            postForModal,setPostForModal,
            setPostForModalTrue,setPostForModalFalse,
            postForUser,setPostForUser
    	]
}