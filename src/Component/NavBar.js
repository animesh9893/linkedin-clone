import styled from 'styled-components'

import Logo from './navbar/Logo';
import SearchBar from './navbar/SearchBar';
import IconBar from './navbar/IconBar';


function NavBar() {
  return (
    <Container>
      <ContainerDiv>
        <Logo/>
        <SearchBar/>
      </ContainerDiv>
      <IconBar/>
    </Container>
  );
}

export default NavBar;


const Container = styled.div`
  
  display:flex;
  flex-direction: row;
  align-items:flex-start;
  justify-content:flex-start;
  background-color:#fff;
  font-size:17px;
  height:53px;
  width:100vw;
  overflow:hidden;
  padding-left:clamp(10px,20%,150px);
  padding-right:clamp(10px,5%,100px);

  &>div{
    padding-left:18px;
  }
`


const ContainerDiv = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  flex-flow:center;
  margin-top:8px;
  justify-content:space-between;
  &>div{
    max-width:425px;
    padding-right:20px;
  }
`

