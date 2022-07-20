import styled from 'styled-components';
import FrontPageImage from '../../Images And Logos/Mount10 Logo/FrontPage.jpg'
import FrontPagePhoneImage from '../../Images And Logos/Mount10 Logo/FrontPagePhone.jpg'

export const Header = styled.div`
  height: 75vh;
  font-weight: 400;  
  position: relative;
  font-size: 16px;
  line-height: 1.7;
  background-position:95%;
  z-index:0;
  background-size: cover ;
  background-repeat :no-repeat ;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 150% 45vh, 0 100%);

`
export const TextBox = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const HeadingPrimary = styled.h1`
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: -5%;
  
`

export const HeadingPrimaryMain = styled.span`
  display: block;
  font-size:75px;
  font-weight: 500;
  letter-spacing: 5px;
  @media screen and (max-width:600px){
    font-size:65px;
  }
`

export const HeadingPrimarySub = styled.span`
  display: block;
  font-size: 45px;
  background-color: rgb(244,244,244,0.5);
  font-weight: 900;
  color:rgb(226, 103, 21);
  text-shadow:rgb(244,244,244,0.3);
  letter-spacing: 5px;
  @media screen and (max-width:600px){
    font-size:35px;
    font-weight: 1000;
  }
`
export const ScrollmageBar = styled.div`
   position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
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
    height:150%;
    position:fixed;
    top:-3%;
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
      background-size: 150% 95%;
  
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }
  }
`

export const GalleryDiv = styled.div`
  width:78%;
  margin:auto;
  margin-top:6% ;
  margin-bottom:6% ;
  @media screen and (max-width:1200px){
    width:95%;
    height:490px;
  }
  @media screen and (max-width:920px){
    width:100%;
  }
  @media screen and (max-width:740px){
    width:115%;
    height:300px;
  }
  @media screen and (max-width:500px){
    height:200px;
  }
`


export const GalleryImage = styled.img`
  size:cover;
  width:100%;
  max-height:100%;
 
`



