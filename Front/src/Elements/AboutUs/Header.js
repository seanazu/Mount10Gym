import styled from "styled-components";


export const HeaderDiv = styled.div`
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height :100%;
  min-height:400px;
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
    height:200%;
    position:absolute;
    top:0;
    left:0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0); backface-visibility: hidden;
      transform: translateZ(0);
    background:#1B2030 url(https://wallpapercave.com/wp/wp4978357.png) 50% 0 no-repeat;
    background-size:cover;
    background-attachment:fixed;
    animation: grow 360s  linear 10ms infinite;
    transition:all 0.4s ease-in-out;
    z-index:-2
  };
  &:a{
    color:#eee
  }
  @media screen and (max-width:810px){
    &:before{
      background-size:1400px;
    }
  }
  @media screen and (max-width:600px){
    &:before{
      background-size:710px;
    }
  }
`

export const Sides = styled.div`
  flex: 0 0 auto;
  width:50%
`
export const Info = styled.div`
  width:100%;
  padding: 10% 10% 10%;
  text-align:center;
  text-shadow:0 2px 3px rgba(0,0,0,0.2)
`
