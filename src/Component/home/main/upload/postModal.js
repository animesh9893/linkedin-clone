import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import './postModal.css';

import {SelectButton,ButtonBack,ButtonSave,
        CloseButton,PersonButton,DropButton
    } from './postModalComponent';

import {State} from './postModalState';


const MainModal = (props) =>{
    const [modalIsOpen,setModalIsOpen,
            setModalIsOpenToFalse,postAs,
            postUser,setUserSelectionModalTrue,
            postFor,setPostFor,setPostForModalTrue] = props.value
    const postForData=postAs[postUser-1].options[postFor-1]
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} className="modal" overlayClassName="overlay">
                <Bar>
                    <Heading>Create a post</Heading>
                    <Close onClick={setModalIsOpenToFalse}><CloseButton/></Close>
                </Bar>
                <SelectionBar>
                    <Image src={postAs[postUser-1].profile} alt={"user"} />
                    <div>
                        <UserSelection onClick={setUserSelectionModalTrue}>
                            <PersonButton />
                            <UserName>{postAs[postUser-1].name}</UserName>
                            <DropButton/>
                        </UserSelection>
                        <PostSharing onClick={setPostForModalTrue}>
                            <div><postForData.logo /></div>
                            <UserName>{postForData.heading}</UserName>
                            <div><DropButton /> </div>     
                        </PostSharing>
                    </div>
                </SelectionBar>
            </Modal>
        </div>
    )
}

const UserModal = (props) =>{
    const [userSelectionModal,setUserSelectionModal,postAs,setPostAsUser,postAsUser,onClickBack,onClickSave,postUser] = props.value
    return (
        <div>
           <Modal isOpen={userSelectionModal} onRequestClose={()=>setUserSelectionModal(false)}  className="modal-select-user" overlayClassName="overlay-select-user">
               <Bar>
                    <Heading style={{color:"black"}}>Posting as</Heading>
                    <Close onClick={()=>setUserSelectionModal(false)}><CloseButton/></Close>
                </Bar> 
                {
                    postAs.map(user => (
                        <User onClick={()=>setPostAsUser(user.id)}>
                            <div><Image src={user.profile} style={{height:"40px",width:"40px"}} alt={user.name} />
                            <div>{user.name}</div></div>
                            <SelectButton active={user.id===postAsUser}/>
                        </User>        
                    ))
                }
                <BackBar>
                    <div onClick={onClickBack}><ButtonBack text={"Back"} /></div>
                    <div onClick={onClickSave}><ButtonSave text={"Save"} change={postAsUser!=postUser}/></div>
                </BackBar>
            </Modal> 
        </div>
    )
}

const ForModal = (props) =>{
    const [postForModal,setPostForModal,postAs,setPostFor,postForUser,onClickBack,onClickSave,postFor] = props.value
    return (
        <div>
           <Modal isOpen={postForModal} onRequestClose={()=>setPostForModal(false)} className="modal-select-user" overlayClassName="overlay-select-user">
            fdfgdfgdg
           </Modal>
        </div>
    )
}

function PostModal (){

    const [
        modalIsOpen,setModalIsOpen,userSelectionModal,setUserSelectionModal,
        postAs,setPostAs,postUser,setPostUser,postAsUser,setPostAsUser,setModalIsOpenToTrue,
        setModalIsOpenToFalse,setUserSelectionModalTrue,setUserSelectionModalFalse,onClickBack,onClickSave,
        postFor,setPostFor,postForModal,setPostForModal,setPostForModalTrue,setPostForModalFalse,
        postForUser,setPostForUser
    ] = State();

    return(
        <div>
            <Box onClick={setModalIsOpenToTrue}>
                <InputBox>
                    Start a post
                </InputBox>
            </Box>
            <MainModal value={[modalIsOpen,setModalIsOpen,setModalIsOpenToFalse,postAs,postUser,setUserSelectionModalTrue,postFor,setPostFor,setPostForModalTrue]}/>
            <UserModal value={[userSelectionModal,setUserSelectionModal,postAs,setPostAsUser,postAsUser,onClickBack,onClickSave,postUser]}/>
            <ForModal  value={[postForModal,setPostForModal,postAs,setPostFor,postForUser,onClickBack,onClickSave,postFor]}/>
        </div>
    )
}
export default PostModal;

const PostSharing = styled.div`
    height:16px;
    color:#00000099;
    width:auto;
    border:2px solid #00000099;   
    padding:5px 12px;
    margin-left:4px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    cursor:pointer;
    border-radius:25px 25px 25px 25px;
    :hover{
        background-color:#00000014;
    }
`

const BackBar = styled.div`
    height:33px;
    width:504px;
    padding:12px 24px;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`
const User = styled.div`
    height:40px;
    width:524px;
    padding:12px 12px 12px 16px;
    border-bottom:1px solid rgba(0,0,0,.15);
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    
    &>div{
        display:flex;
        flex-direction:row;
        align-items:center;
        &>div{
            font-size:14px;
            min-width:150px;
            max-width:300px;
            font-weight:500;
            padding:0px 0px 0px 12px;
            color:#000000E6;
        }
    }
`

const UserName = styled.div`
    font-size:14px;
    color:#00000099;
    padding:0px 4px;
    display:flex;
    align-items:flex-start;
    justify-content:center;
`

const UserSelection = styled.div`
    height:16px;
    color:#00000099;
    width:auto;
    border:2px solid #00000099;   
    padding:5px 12px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    cursor:pointer;
    border-radius:25px 25px 25px 25px;
    :hover{
        background-color:#00000014;
    }
`

const Image = styled.img`
    width:48px;
    height:48px;
    border-radius:50px;
    background-color:red;
`

const Heading = styled.div`
    font-size:20px;
    color:#000000B3;
    padding:16px 48px 16px 24px;
`
const Close = styled.div`
    margin-right:12px;
    width:40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50px;
    cursor:pointer;
    :hover{
        background-color:#d6dadf;
    }
`

const SelectionBar = styled.div`
    width:504px;
    height:48px;
    display:flex;
    flex-direction:row;
    padding:12px 24px;
    align-items:center;

    &>div{
        display:flex;
        flex-direction:row;
        padding:8px;
    }
`

const InputBox = styled.div`
    margin-left:25px;
    background-color:transparent;
    border:none;
    outline:none;
    font-size:14px;
    color:#00000099;
    font-weight:400;
    width:420px;
    height:45px;
    display:flex;
    align-items:center;
`

const Box = styled.div`
    height:48px;
    width:452px;
    border-radius:25px 25px 25px 25px;
    border:1px solid rgba(0,0,0,.15);
    transition:0.8s;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    :hover{
        background-color:#d6dadf;
    }
`

const Bar =styled.div`
    height:61px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid rgba(0,0,0,.15);
`






