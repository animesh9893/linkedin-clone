import styled from 'styled-components'
import pageLogo from '../../../img/pageLogo.jpg'
import {GroupCardContext} from '../../../state/homeSidebarContext';
import React ,{useContext} from 'react';
import {Link} from 'react-router-dom';

function GroupCard(){
	const [data,setData] = useContext(GroupCardContext);
	return (
		<Container>
			<div>
			<CardContainer>
				<Image src={data.logo} />
				<Link to={data.url} style={{ color: "#000000E6", textDecoration: 'none'}}>
					<Heading>{data.name}</Heading>
				</Link>
				<Content>
					<div>Page notification<div>{data.notification}</div></div>
					<div>Page visitor<div>{data.visitor}</div></div>
				</Content>
			</CardContainer>
			<Link to={data.analytics} style={{ color: "#000000E6", textDecoration: 'none'}}>
			<Analytics>
				See visitor analytics
			</Analytics>
			</Link>
			</div>
		</Container>		
	);
};

export default GroupCard;


const Container= styled.div`
	margin-top:8px;
	height:auto;
	border-radius:8px;
	width:225px;
	background: linear-gradient(180deg, #378fe9 32px, #ffffff 0%);
`

const Image =styled.img`
	width:48px;
	height:48px;
	padding-bottom:8px;
`

const CardContainer =styled.div`
	padding:12px;
	height:157px;
	display:flex;
	justify-content:flex-start;
	flex-direction:column;
	border-bottom: 1px solid rgba(0,0,0,.15);

`

const Heading =styled.div`
	font-size:16px;
	font-weight:600;
	color:#000000E6;
	coursor:pointer;
	border-bottom: 1px solid rgba(0,0,0,.15);
	padding-bottom:8px;
	:hover{
		text-decoration:underline;
	}
`
const Content =styled.div`
	font-size:12px;
	font-weight:400;
	color:#00000099;
	padding-top:12px;
	coursor:pointer;
	&>div{
		:hover{
			text-decoration:underline;
		}
		padding-bottom:5px;
		display:flex;
		justify-content:space-between;
		&>div{
			color:blue;
		}
	}
`

const Analytics =styled.div`
	display:flex;
	justify-content:center;
	padding:12px;
	font-size:12px;
	color:#000000E6;
	coursor:pointer;
	:hover{
			background-color:#d6dadf;
	}
`