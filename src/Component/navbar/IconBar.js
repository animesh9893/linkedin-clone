import styled from 'styled-components'

import {IconBarContext} from '../../state/contextURL'
import React,{useContext} from 'react'
import {Link } from 'react-router-dom';

function IconBar(){
  const [data,setData,active,setActive]=useContext(IconBarContext);
  // console.log(setData)
	return (
        <Container>
          {
            data.map(app =>(
            <Link to={app.url} onClick={()=>setActive(app.id)} style={{ color: "#000000E6", textDecoration: 'none'}}>
              <Icon icon={app.logo} active={app.id===active} name={app.name} link={app.url}/>
            </Link>
            ))
          }

        </Container>
	)
}


export default IconBar;

const Icon = (props)=>{
  // console.log(props.link)
  return (
    <IconContainer>
      <props.icon style={{fontSize:30}}/>
      <div>{props.name}</div>
      {props.active ? <ActiveLine /> : <Padding/>}
    </IconContainer>
  )
}


const Container= styled.div`
  display:flex;
  align-items:flex-end;
  flex-direction:row;
  :hover{
    cursor:pointer;
  }
`

const IconContainer = styled.div`
  height:52px;
  width:80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:12px;

`

const ActiveLine = styled.div`
  padding-top:4px;
  width:80px;
  border-bottom:2px solid red;
`

const Padding = styled.div`
  padding-top:2px;
`