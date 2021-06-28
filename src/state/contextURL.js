import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {useState} from 'react';

export const IconBarContext = () => {
	const [appIcon, setAppIcon] = useState(
		[
		{
			id:1,
			active:true,
			name:"home",
			url:"/",
			logo:HomeIcon,
		},
		{
			id:2,
			active:false,
			name:"My Network",
			url:"/network",
			logo:PeopleIcon
		},
		{
			id:3,
			active:false,
			name:"Jobs",
			url:"/jobs",
			logo:WorkIcon
		},
		{
			id:4,
			active:false,
			name:"Messaging",
			url:"/messaging",
			logo:TextsmsIcon
		},
		{
			id:5,
			active:false,
			name:"Notification",
			url:"/notification",
			logo:NotificationsIcon
		}
	]
	);
	const [active,setActive] = useState(1);
	return [appIcon,setAppIcon,active,setActive];
};