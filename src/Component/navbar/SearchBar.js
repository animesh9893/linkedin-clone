import styled from 'styled-components'
import React, { useRef,useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';



function SearchBar(){

  const [focus,setFocus]=useState(false);
  const toggleFocus = () =>{
    setFocus(!focus);
  };
  const inputRef = useRef(null);

  useEffect(()=>{
    if(focus){
      inputRef.current.focus();
    }
  },[focus]);

	return (
    <Container>
    <SearchBarContainer onClick={toggleFocus}>
      <Icon><SearchIcon style={{ fontSize: 21 , color:"black"}} /></Icon>
      <Search placeholder={'Search'} type={'search'} ref={inputRef}/>
    </SearchBarContainer>
    </Container>
	
  )
}


export default SearchBar;

const Container = styled.div`
  width:425px;
  display:flex;
  justify-content:flex-start;
  // border:1px solid black;
`

const SearchBarContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
  background-color:#eef3f8;
  height:34px; 
  padding-left:8px;
  margin-left:8px;
  &>div{
    padding-left:8px;
  }
`

const Icon = styled.div`
  padding-left:8px;
`

const Search = styled.input`
  background-color:transparent;
  border:none;
  padding-right:8px;
  width:232px;
  font-size:14px;
  font-weight:400;
  height:34px;
  outline:none;
  transition:0.2s;
  :focus{
    width:350px;
    font-size:18px;
    font-weight:500;
  }
`