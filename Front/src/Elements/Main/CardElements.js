import styled from 'styled-components';
import { Button } from '@mui/material';

export const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  grid-column-gap: 3% ;
  margin-right:5px;
  margin-left:5px;
  @media screen and (max-width: 800px) {
    grid-column-gap: 4px ;
  }
`

export const Card = styled.div`
  position: relative;
  width: 40%;
  background: white;
  color: black;
  border-radius: 15px;
  text-decoration: none;
  overflow: hidden;
  transition-property: color;
  transition-delay: 0.15s;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  @media screen and (max-width: 800px) {
    width:350px ;
    height:420px;
    margin-left: auto;
    margin-right: auto;
    
  }
  @media screen and (max-width: 547px) {
    width: 300px ;
    margin-left: auto;
    margin-right: auto;
    
  }
  @media screen and (max-width: 450px) {
    width: 300px ;
    height:320px;
    margin-left: auto;
    margin-right: auto;
    
  }
  &:hover{
    color:rgb(255,69,0);
  }
`
export const CardHead = styled.div`
  position: relative;
  padding-top: 60%;
  @media screen and (max-width: 1300px) {
    padding-top: 80%;
  }
  @media screen and (max-width: 800px) {
    font-size:12px
    
  }
  
`
export const CardImageGym = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: left;
  transform-origin: top center;
  transition-property: transform;
  transition-delay: 0.15s;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transition-property: opacity;
    transition-delay: 0.15s;
  }
  @media screen and (max-width: 768px) {
    
  }
`
export const CardImageBasketball = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition-delay: 0.15s;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transition-property: opacity;
    transition-delay: 0.15s;
  }
`
export const CardAuthor = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  transition-delay: 0;
  position: absolute;
  right:24%;
  bottom: 0;
  color: white;
`
export const CardBody = styled.div`
  font-size: small;
  padding: 2em;
  direction:rtl;
  font-size:20px;
  @media screen and (max-width: 1500px) {
    font-size:15px;
    
  }
  @media screen and (max-width: 800px) {
    font-size:10px;
    
  }
`

export const CardHeadline = styled.h2`
  font-weight: 400;
  margin: 0 0 0.5em;
`

export const CardText = styled.p`
  line-height: 1.5;
  margin: 0;
  opacity: 0.8;
`
export const CardFoot = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  position: absolute;
  left: 0;
  top:88%;
  right: 0;
  bottom: 0;
  padding: 0 2em 2em;
  opacity: 0;
  transition-property: opacity;
  opacity: 1;
  transition-delay: 0.15s;
`
export const CardLink = styled.span`
  color: currentColor;
  text-decoration: none;
  border-bottom: 2px solid #b5272d;
`

export const CardBorder = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.92, 0.24, 1);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6px;
  background: #b5272d;
  transform: scaleY(0);
  transition-property: transform;
`


export const Author = styled.div`
  display: flex;
  align-items: center;

`

export const AuthorImage = styled.img`
  flex-shrink: 0;
  margin-right: 1em;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  overflow: hidden;
`

export const AuthorContent = styled.div`
  display: grid;
  grid-gap: 0.4em;
  font-size: 0.9em;
`

export const AuthorHeader = styled.p`
  margin: 0;
  font-weight: 600;
`

export const AuthorSubHeader = styled.p`
  margin: 0;
  opacity: 0.8;
`

export const CardButton = styled(Button)`
  && {
    color: black;
    text-decoration: none;
    @media screen and (max-width:400px){
      font-size: 13px;
    }
    @media screen and (max-width:308px){
      font-size: 9px;
    }
  }

`