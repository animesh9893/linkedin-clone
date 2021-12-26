import React from 'react';
import styled from 'styled-components';

import Upload from './upload/upload';

function Main(){
	return(
		<Container>
			<Upload/>
		</Container>
	)
}

export default Main;

const Container = styled.div`
	width:540px;
	height:auto;
`