import styled from 'styled-components'
import UserCard from './userCard';
import GroupCard from './groupCard';
import RecentCard from './recentCard';
import './groupCard.css';

import React, { useEffect, useState } from 'react';

function Sidebar(){
	const [offset, setOffset] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if(window.pageYOffset>640){
				setOffset(true)
			}else{
				setOffset(false)
			}
			// console.log(window.pageYOffset)
		}
	}, []);
	
	return (
		<Container>
			<UserCard />
			<GroupCard/>
			<div className={ offset ? "card-fixed":""}>
				<RecentCard/>
			</div>
		</Container>
	);
};

export default Sidebar;



const Container = styled.div`
	height:100%;
`