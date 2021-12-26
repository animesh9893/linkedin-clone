import React from 'react';
import { useRef,useState,useEffect} from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import PostModal from './postModal';



function Upload(){
	const profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
	
	


	return(
		<Container>
			<Write>
				<ProfileImg src={profilePic}/>
				<PostModal />
			</Write>
			<UploadOther>

			</UploadOther>
		</Container>
	)
}

export default Upload;

const Container = styled.div`
	width:540px;
	height:116px;
	background-color:white;
	border-radius:8px;
`

const Write = styled.div`
	height:56px;
	padding-top:8px;
	padding-left:16px;
	padding-right:16px;
	display:flex;
	flex-direction:row;
	align-items:center;
`

const UploadOther = styled.div`
	height:52px;
`

const ProfileImg = styled.img`
	width:48px;
	height:48px;
	border-radius:50%;
	padding-right:8px;
`