import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const SideMenuDiv = styled.div`
  position:fixed ;
  color:white;
  top:0;
  right:0px;
  height:100%; 
  width: 100% ;
  background-color: rgb(0,0,0);
  z-index:200;
  color:white;
  
`

export const MenuTextBox = styled.p`
  margin-top:20%;
  
`
export const PageLinkBox = styled.h2`
font-size:35px;
`
export const PageLink = styled(Link)`
color: #fff	;
text-decoration: none;
border-bottom: 2px solid white;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #FF7F50;
}
`

export const ExitMenuButton = styled(CloseOutlinedIcon)`
  position:fixed;
  top:015px;
  right:15px;
  font-size:100px;

`