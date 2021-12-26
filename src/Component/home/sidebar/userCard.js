import React,{useContext} from 'react'

import styled from 'styled-components'
import default_bg from '../../../img/default_bg.png';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import {Link } from 'react-router-dom';

import {UserCardContext} from '../../../state/homeSidebarContext';

function UserCard(){
	const [data,setData] = useContext(UserCardContext)
	return (
		<Card>
			<BackgroundImg src={default_bg}/>
			<User>
				<ProfileImg src={data.user.picture} />
				<Link to={data.user.url} style={{ color: "#000000E6", textDecoration: 'none'}}>
				<Name>{data.user.name}</Name>
				</Link>
				<Discription>{data.user.discription}</Discription>
			</User>
			<Stats>
				<div>Who viewed your profile<div>{data.stats.profile}</div></div>
				<div>Views of your post<div>{data.stats.post}</div></div>
			</Stats>
			<Link to={data.links.premium} style={{ color: "#000000E6", textDecoration: 'none'}}>
			<Membership>
				Acess exclusive tools & insights
				<div><div></div>Try Premium Free for 1 Month</div>
			</ Membership>
			</Link>
			<Link to={data.links.myItems} style={{ color: "#000000E6", textDecoration: 'none'}}>
			<MyItems>
				<BookmarkIcon style={{color:"#666666"}}/><div>My items</div>
			</MyItems>
			</Link>
		</Card>
	);
};

export default UserCard;

const Card = styled.div`
	background-color:white;
	width:100%;
	height:349px;
	// background: linear-gradient(180deg, #A0B4B7 54px, #FFF 50px);
	border-radius:10px;
`

const User =styled.div`
	padding:12px;
	display:flex;
	align-items:center;
	flex-direction:column;
	margin-top:-54px;
	border-bottom: 1px solid rgba(0,0,0,.15);
	:hover{
		text-decoration:underline;
	}
`
const ProfileImg = styled.img`
	width:68px;
	height:68px;
	border-radius:50px;
	border: 2px solid white;
	margin-bottom:12px;
	// margin-top:-36px;
`

const BackgroundImg = styled.img`
	width:100%;
	height:54px;
	border-radius:10px 10px 0px 0px;
`

const Name= styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	width:100%;
	font-size:16px;
	font-weight:600;
	cursor:pointer;
`

const Discription = styled.p`
	font-size:12px;
	margin:4px 0px 0px;
	color:#00000099;
	text-align:center;
`

const Stats = styled.div`
	display:flex;
	flex-direction:column;
	font-size:12px;
	color:#00000099;
	padding-top:12px;
	padding-bottom:12px;
	border-bottom: 1px solid rgba(0,0,0,.15);

	&>div{
		display:flex;
		justify-content:space-between;
		padding:4px 12px;
		&>div{
			color:#0A66C2;
		}
		:hover{
			background-color:#d6dadf;
		}
	}
`
const Membership = styled.div`
	padding:12px;
	font-size:12px;
	color:#00000099;
	text-decoration:underline;
	border-bottom: 1px solid rgba(0,0,0,.15);
	&>div{
		width:100%;
		color:#000000E6;
		font-weight:600;
		display:flex;
		align-items:center;
		&>div{
			width:11.33px;
			height:11.33px;
			background:linear-gradient(to left ,rgba(248,199,126,1) 50%,rgba(231,163,62,1) 50%);
			margin-right:4px;
		}
		:hover{
			color:#0a66c2;
		}
	}
	:hover{
		background-color:#d6dadf;
	}
`

const MyItems = styled.div`
	display:flex;
	align-items:flex-start;
	justify-content:flex-start;
	padding:12px;
	font-size:12px;
	font-weight:600;
	color:#000000E6;
	&>div{
		padding-left:4px;
	}
`