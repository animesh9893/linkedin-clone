import styled from 'styled-components'
import {LogoURL} from '../context';

function Logo(){
	return (
        <LogoImg src={LogoURL} />
	)
}


export default Logo;

const LogoImg = styled.img`
  width: 34px;
  height: 34px;
  padding-left:max(5%,27px);
`