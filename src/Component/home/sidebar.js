import styled from 'styled-components'
import UserCard from './userCard';
import GroupCard from './groupCard';

function Sidebar(){
	return (
		<Container>
			<UserCard />
			<GroupCard />
		</Container>
	);
};

export default Sidebar;


const Container = styled.div`

`