import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import FrontPageImage from '../../Images And Logos/Mount10 Logo/FrontPage.jpg'
import FrontPagePhoneImage from '../../Images And Logos/Mount10 Logo/FrontPagePhone.jpg'

export const MainCompDiv = styled.div`
 position:relative;
  z-index: 0;
`
export const Nav = styled.nav`
  background:	#000 ;
  height: 85px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  height:125px;
  position:absolute;
  left:0px;
`;

export const NavUserLink = styled(Link)`
  color: #fff	;
  position:absolute;
  text-decoration: none;
  top: 0.6%;
  right:3%;
  cursor: pointer;
  &.active {
    color: #FF7F50;
  }
`

export const NavLink = styled(Link)`
  color: #fff	;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FF7F50;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 670px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
` 

export const NavMenu = styled.div`
  display: flex;
  font-size : large ;
  align-items: center;
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 2px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFF;
    color: #010606;
  }
`;

export const HeaderDiv = styled.div`
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height : 600px ;
  min-height:400px;
  max-height:600px;
  color:#eee;
  &:after{
    content:"";
    width:100%;
    height:100%;
    position:absolute;
    bottom:0;
    left:0;
    z-index:-1;
   background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%,rgba(27,32,48,1) 100%);
  };
  &:before{
    content:"";
    width:100%;
    height:140%;
    position:fixed;
    top:0;
    left:0;
    background:url(${FrontPageImage});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -5%;
    background-position: center;
    animation: grow 360s  linear 10ms infinite;
    transition:all 0.4s ease-in-out;
    z-index:-2
  };
  &:a{
    color:#eee
  }
  @media screen and (max-width:1040px){
    &:before{
      background-repeat: no-repeat;
      margin-top: -20%;
      background-size: 158%;
      background-position: center;
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }
  }
  @media screen and (max-width:850px){
    &:before{
      margin-top: -24%;
      background-size: 180%;
    }
  }
  @media screen and (max-width:750px){
    &:before{
      background:url(${FrontPagePhoneImage});
      background-repeat: no-repeat;
      margin-top: 0%;
      background-size:100%;
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }
  }
  @media screen and (max-width:680px){
    &:before{
      background-size:110%;
    }
  }
  @media screen and (max-width:570px){
    &:before{
      background-size:130%;
    }
  }
  @media screen and (max-width:450px){
    &:before{
      background:url(${FrontPagePhoneImage});
      background-repeat: no-repeat;
      background-position:center top;
      margin-top: 0%;
      background-size: 140% 75%;
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }
  }
`

export const Sides = styled.div`
  flex: 0 0 auto;
  width:50%
`
export const Info = styled.div`
  position: absolute;
  display: grid;
  background-clip: content-box;
  align-items:center;
  margin-top: 200px;
  grid-template-columns: 1fr ;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`

export const Content = styled.section`
  margin:auto;
  padding:5%;
  color: black;
  font-size:30px;
  border-radius: 15px;
  direction:rtl;
  max-width:70%;
  text-align:center;
  @media screen and (max-width:1500px){
    font-size:22px;
  }
  @media screen and (max-width:800px){
    font-size:15px;
    max-width:90%;
  }
`
export const ContentBox = styled.section`
`
export const HeaderText = styled.div`
  font-size: 100px;
  color: rgb(0,0,0);
  border-radius: 15px;
  background-color: rgb(244,244,244,.3);
  text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  @media screen and (max-width:600px){
    font-size:70px;
  }
  
`
export const SubHeaderText = styled.div`
  font-size: 60px;
  text-shadow: 
    1px 1px 1px rgb(244,244,244,0.6);
  color: black;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media screen and (max-width:1200px){
    display: block;
  }
  @media screen and (max-width:600px){
    font-size:40px;
  }


`

export const PageContent = styled.div`
z-index: 2;
background:-webkit-radial-gradient( center center,circle cover,white 50%, #ccc);
  background-repeat: no-repeat;
`