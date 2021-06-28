import styled from 'styled-components'
import DateRangeIcon from '@material-ui/icons/DateRange';

import {useState} from 'react';
import {Link } from 'react-router-dom';


function RecentCard(){
	const [recentDropDownIcon,setRecentDropDownIcon] = useState(false); 
	const [recentDropState,setRecentDropState] = useState(true);
	
	const [eventDropState,setEventDropState] = useState(true);
	const [eventDropDownIcon,setEventDropDownIcon] = useState(false); 

	const [hashDropState,setHashDropState] = useState(true);
	const [hashDropDownIcon,setHashDropDownIcon] = useState(false);

	const groupLink = "/group";
	const RecentData = [
		{
			id:1,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:2,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:3,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:4,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:5,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		}
	]
	const EventData = [
		{
			id:1,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:2,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:3,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:4,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:5,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		}
	]
	const HashData = [
		{
			id:1,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:2,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:3,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:4,
			url:"/RecentData",
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		},
		{
			id:5,
			url:"/RecentData",
			type:"event",
			heading:"nfosdfnsdfskdjf"
		}
	]
	return (
		<Container>
			<ContainerDiv>
				<div>
					<RecentDiv  onMouseEnter={e=>{setRecentDropDownIcon(true)}} onMouseLeave={e=>{setRecentDropDownIcon(false)}}>
						<Heading>Recent </Heading>
						<RecentDrop onClick={e=>setRecentDropState(!recentDropState)}>
							{recentDropDownIcon && <Drop state={recentDropState} />}
						</RecentDrop>
					</RecentDiv>
					{
						recentDropState && RecentData.map(data=>(
							<RecentContent>
								<Icon>{data.type==="event" ? <CalanderLogo/>:<HashLogo/>}</Icon>
								<Text>{data.heading}</Text>
							</RecentContent>
						))
					}
				</div>
				<div>
					<Group>
						<PageLink href={groupLink}>Group</PageLink>
					</Group>
				</div>
				<div>
					<Bar onMouseEnter={e=>{setEventDropDownIcon(true)}} onMouseLeave={e=>{setEventDropDownIcon(false)}}>
						<PageLink href={groupLink}>Events</PageLink>
						<div>
							<div><AddLogo /></div>
							<DropButton onClick={e=>setEventDropState(!eventDropState)}>{eventDropDownIcon && <Drop state={eventDropState} />}</DropButton>
						</div>
					</Bar>
					{
						eventDropState && EventData.map(data=>(
							<RecentContent>
								<Icon>{data.type==="event" ? <CalanderLogo/>:<HashLogo/>}</Icon>
								<Text>{data.heading}</Text>
							</RecentContent>
						))
					}
					{ eventDropState && <AllLink href={'/events'}>See all</AllLink> }
				</div>
				<div>
					<Bar onMouseEnter={e=>{setHashDropDownIcon(true)}} onMouseLeave={e=>{setHashDropDownIcon(false)}}>
						<PageLink href={groupLink}>Followed Hashtags</PageLink>
						<div>
							<DropButton onClick={e=>setHashDropState(!hashDropState)}>{hashDropDownIcon && <Drop state={hashDropState} />}</DropButton>
						</div>
					</Bar>
					{
						hashDropState && HashData.map(data=>(
							<RecentContent>
								<Icon>{data.type==="event" ? <CalanderLogo/>:<HashLogo/>}</Icon>
								<Text>{data.heading}</Text>
							</RecentContent>
						))
					}
					{ eventDropState && <AllLink href={'/tags'}>See all</AllLink> }
				</div>
				<Discover>
					Discover more
				</Discover>
			</ContainerDiv>
		</Container>		
	);
};

export default RecentCard;


const Container = styled.div`
	width:225px;
	min-height:172px;
	max-height:auto;
	margin-top:8px;
	background-color:white;
	border-radius:8px;
`

const Discover =styled.div`
	margin-top:18px;
	padding:12px;
	font-size:14px;
	font-weight:600;
	color:#00000099;
	border-top:1px solid rgba(0,0,0,.15);
	display:flex;
	align-items:center;
	justify-content:center;
	:hover{
		background-color:#eef3f8;
	}
`

const DropButton = styled.div`
	width:36px;
	height:32px;
	display:flex;
	padding-left:2px;
	justify-content:center;
	align-items:center;
	border-radius:50%;
	:hover{
		background-color:#eef3f8;
	}
`

const Bar = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	&>div{
		display:flex;
		flex-direction:row;
		align-items:center;
		&>div{
			width:32px;
			height:32px;
			display:flex;
			flex-direction:row;
			align-items:center;
			justify-content:center;
			border-radius:50%;
			:hover{
				background-color:#eef3f8;
			}
		}
	}
`
const AllLink = styled.a`
	text-decoration:none;
	font-size:12px;
	padding-left:32px;
`

const PageLink = styled.a`
	padding-left:8px;
	font-size:12px;
	color:#0A66C2;
	text-decoration:none;
`
					
const Group = styled.div`
	// padding-top:12px;
	padding-bottom:8px;
`

const RecentContent = styled.div`
	width:100%;
	display:flex;
	flex-direction:row;
	:hover{
		background-color:#d6dadf;
	}
`
const Icon = styled.div`
	padding-left:8px;
	padding-right:8px;
`
const Text = styled.div`
	font-size:12px;
	font-weight:600;
	color:#00000099;
	display:flex;
	align-items:center;
`



const RecentDiv = styled.div`
	// width:225px;
	height:32px;
	display:flex;
	flex-direction:row;
	// padding:8px;
	padding-left:8px;
	padding-top:6px;
	padding-right:8px;
	align-item:center;
	justify-content:space-between;
`

const RecentDrop = styled.div`
	width:36px;
	height:32px;
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:50%;
	:hover{
		background-color:#eef3f8;
	}
`

const Heading = styled.div`
	font-size:12px;
	font-weight:400;
	width:169px;
	display:flex;
	align-items:center;
	justify-content:flex-start;
`

const ContainerDiv = styled.div`
	width:225px;
	:hover{
		cursor:pointer;
	}
`

const Drop = (props) =>{
	if(!props.state){
		return (
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
				  <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
				</svg>
			</div>
		)
	}else{
		return (
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
				  <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
				</svg>
			</div>
		)
	}
	
}

const CalanderLogo = () =>{
	return(
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  				<path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
			</svg>
		</div>
	)
}


const HashLogo = () =>{
	return(
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
			  <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
			</svg>
		</div>
	)
}

const AddLogo = () =>{
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
			  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
			</svg>
		</div>
	)
}
