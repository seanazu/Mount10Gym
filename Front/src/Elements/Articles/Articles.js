import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { styled as styledReactElement } from '@mui/system';

export const CardBox = styled.div`
  display:grid;
  justify-content: center ;
  margin-bottom:15%;
  @media screen and (min-width:2000px){
    display:flex
  }
`

export const BlogCard = styled.div`
  font-family: 'Roboto', sans-serif;
  position : relative;
  width: 900px;
  height:450px;
  margin : 70px ;
  background-color : #FFF;
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  @media screen and (max-width: 930px) {
   width:550px;
   height:290px;
   margin : 60px ;
  }
  @media screen and (max-width: 580px) {
   width:88%;
   height:250px;
   margin : 40px ;
  }
  @media screen and (max-width: 450px) {
   width:88%;
   margin : 30px ;
  }
  @media screen and (max-width:320px) {
   height:60%;
   margin : 30px ;
  }
  @media screen and (max-width:320px) {
   height:90%;
   width: 80% ;
  }

`

export const Thumbnail = styled.div`
  float : left;
  position : relative ;
  top : -5px;
  left: -24px;
  height : 320px;
  width : 530px;
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  overflow: hidden;
  @media screen and (max-width: 930px) {
    width:300px;
    height:200px;
   }
  @media screen and (max-width: 580px) {
    width:200px;
    height:200px;
   }
  @media screen and (max-width: 450px) {
    width:55%;
   }
  @media screen and (max-width: 320px) {
    width:50%;
    height:50%;
   }
`

export const LeftImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  transform: translate(-50%,-50%);
  @media screen and (max-width: 930px) {
    width:100%;
   }
  @media screen and (max-width: 580px) {
    width:150%;
   }
  @media screen and (max-width: 400px) {
    height:100%
   }
  @media screen and (max-width: 380px) {
    width:220%;
   }
`

export const CardContent = styled.div`
  margin-left : 590px;
  margin-right : 20px;
  @media screen and (max-width: 930px) {
    margin-left :300px;
    margin-right : 10px;
   }
  @media screen and (max-width: 580px) {
    margin-left :200px;
    margin-right : 7px;
   }
  @media screen and (max-width: 450px) {
    margin-left :55%;
    margin-right : 7px;
   }
  @media screen and (max-width: 360px) {
    margin-left :55%;
    margin-right : 7px;
   }
  @media screen and (max-width: 320px) {
    margin-left :55%;
    margin-right : 7px;
   }
`

export const ContentHead = styled.h1`
  padding-top : -10px;
  font-size : 1.3rem;
  color : #4B4B4B;
  @media screen and (max-width: 930px) {
    font-size: 15px;
    font-weight:700;
   }
  @media screen and (max-width: 580px) {
    font-size: 12px;
    font-weight:700;
   }
`

export const Seperator = styled.div`
  margin-top : 7px;
  border : 1px solid #C3C3C3;
`

export const CardParagraph = styled.p`
  text-align: justify;
  padding-top : 10px;
  font-size: 18px;
  text-align: right;
  line-height: 150%;
  color : #4B4B4B;
  @media screen and (max-width: 930px) {
    font-size: 10px;
    font-weight:700;
   }
  @media screen and (max-width: 430px) {
    font-size: 8px;
   }
  @media screen and (max-width: 360px) {
    font-size: 7px;
   }
`
export const DateDay = styled.h5`
  position : absolute;
  bottom : -120px;
  font-size : 6rem;
  color : #C3C3C3;
  @media screen and (max-width: 930px) {
    font-size: 3rem;
    bottom : -60px;
    left: 30px;
   }
  @media screen and (max-width: 580px) {
    font-size: 2rem;
    bottom : -35px;
    left: 10px;
   }
`

export const DateMonth = styled.h6`
  position : absolute;
  left : 30px;
  bottom : -55px;
  font-size : 2rem;
  color : #C3C3C3; 
  @media screen and (max-width: 930px) {
    font-size: 1.5rem;
    bottom : -50px;
    left: 30px;
   }
  @media screen and (max-width: 580px) {
    font-size: 0.8rem;
    bottom : -18px;
    left: 10px;
   }
`

export const ArticleButton = styled.div`
  position : absolute;
  right : 50px;
  bottom : -40px;
  box-sizing: border-box;
  padding-top: 18px;
  background-color : #1875D0;
  width :80px;
  height : 80px;
  color : white;
  text-align : center;
  border-radius : 50%;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
  @media screen and (max-width: 930px) {
    width :60px;
    height : 60px;
    padding-top: 13px;
   }
  @media screen and (max-width: 580px) {
    width :40px;
    height : 40px;
    padding-top: 8px;
    bottom : -20px;
    
   }
`
export const ArrowIcon = styledReactElement(ArrowDownwardIcon)`
  font-size:45px;
  @media screen and (max-width: 930px) {
    font-size:35px;
   }
   @media screen and (max-width: 580px) {
    font-size:25px;
   }
`