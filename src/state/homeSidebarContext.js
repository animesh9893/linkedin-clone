
import React,{useState,createContext} from 'react';

export const UserCardContext = createContext();

export const UserCardProvider = (props) =>{
	const [userData,setUserData] = useState({
		user:{
			name:"Animesh Shrivatri",
			picture:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			discription:"STUDENT | FULL STACK DEVELOPER | TRADER",
			url:"/in/animeshshrivatri"
		},
		stats:{
			profile:137,
			post:5000
		},
		links:{
			premium:"/premium",
			myItems:"/myItems"
		}
	});
	return (
		<UserCardContext.Provider value={[userData,setUserData]}>
			{props.children}
		</UserCardContext.Provider>
	);
}




export const GroupCardContext = createContext();

export const GroupCardProvider = (props) =>{
	const [groupData,setGroupData] = useState({
		name:"Tree with u",
		notification:0,
		visitor:0,
		url:"/treewithu",
		analytics:"/analytics",
		logo:"https://cdn.logo.com/hotlink-ok/logo-social.png"
	});
	return (
		<GroupCardContext.Provider value={[groupData,setGroupData]}>
			{props.children}
		</GroupCardContext.Provider>
	);
}

export const Recent = ()=>{
	const [recentDropDownIcon,setRecentDropDownIcon] = useState(false); 
	const [recentDropState,setRecentDropState] = useState(true);
	const [recentData,setRecentData] = useState([
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
		}]);
	return [
		recentDropDownIcon,setRecentDropDownIcon,
		recentDropState,setRecentDropState,
		recentData,setRecentData
	]
}


export const Event = ()=>{
	const [eventDropState,setEventDropState] = useState(true);
	const [eventDropDownIcon,setEventDropDownIcon] = useState(false); 
	const [eventURL,setEventURL] = useState("/events");
	const [eventData,setEventData] = useState([
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
	])
	return [eventDropState,setEventDropState,eventDropDownIcon,setEventDropDownIcon,eventURL,setEventURL,eventData,setEventData]
}

export const Hash = ()=>{
	const [hashDropState,setHashDropState] = useState(true);
	const [hashDropDownIcon,setHashDropDownIcon] = useState(false);
	const [hashURL,setHashURL] = useState("/hashtags");
	const [hashData,setHashData] = useState([
		{
			id:1,
			url:"/RecentData",
			type:"tag",
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
			type:"tag",
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
			type:"tag",
			heading:"nfosdfnsdfskdjf"
		}
	])
	return [hashDropState,setHashDropState,hashDropDownIcon,setHashDropDownIcon,hashURL,setHashURL,hashData,setHashData]
}

export const RecentCardContext = createContext();

export const RecentCardProvider = (props) =>{
	const [recentDropDownIcon,setRecentDropDownIcon,recentDropState,setRecentDropState,recentData,setRecentData] = Recent();
	const [eventDropState,setEventDropState,eventDropDownIcon,setEventDropDownIcon,eventURL,setEventURL,eventData,setEventData]=Event();
	const [hashDropState,setHashDropState,hashDropDownIcon,setHashDropDownIcon,hashURL,setHashURL,hashData,setHashData]= Hash();
	const [groupURL,setGroupURL] = useState("/group")
	const [discoverURL,setDiscoverURL] = useState("/discover");
	const bundle = {
		recent:[recentDropDownIcon,setRecentDropDownIcon,recentDropState,setRecentDropState,recentData,setRecentData],
		event:[eventDropState,setEventDropState,eventDropDownIcon,setEventDropDownIcon,eventURL,setEventURL,eventData,setEventData],
		hash:[hashDropState,setHashDropState,hashDropDownIcon,setHashDropDownIcon,hashURL,setHashURL,hashData,setHashData],
		group:[groupURL,setGroupURL],
		discover:[discoverURL,setDiscoverURL]
	}
	return (
		<RecentCardContext.Provider value={bundle}>
			{props.children}
		</RecentCardContext.Provider>
	);
}