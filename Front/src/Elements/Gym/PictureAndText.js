import styled from 'styled-components'

export const OuterDiv = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 700px) {
	height: 550px;
  }
  @media screen and (max-width: 500px) {
	height: 450px;
  }
`

export const TextBox = styled.div`
  margin: auto;
  width:450px;
  left: 10%;
  position: absolute;
  z-index: 2;
  text-shadow: 1px 1px rgb(226, 103, 21);
  @media screen and (max-width: 1200px) {
	text-align: right; 
	background-color: rgb(0, 0, 0 , 0.45);
	border-radius:20px ;
	width: 70%;
  min-height: 60%;
  left: 15%;
  }
  @media screen and (max-width: 500px) {
	left: 12%;
  top:10%;
  padding:10%;
	width: 80%;
  }
`

export const Content = styled.p`	
  font-size: 20px;
  z-index: 3;
  text-align: right;
  font-weight: 500;
  line-height: 1.4;
  direction:rtl;
  color: rgb(0, 0, 0);
  margin: 19px 0;
  @media screen and (max-width: 1200px) {
    font-size:20px;
    color: #fff;
  }
  @media screen and (max-width: 700px) {
    
	font-size: 12px;
  }
  @media screen and (max-width:500px) {
  margin: 0px 0;
  }
  @media screen and (max-width:355px) {
	font-size: 10px;
  }
`
export const Header = styled.h1`
  font-family: "Alef Hebrew", sans-serif;
  color: black;
  margin-top: -20px;
  font-size: 45px;
  line-height: 1;
  font-weight: 600;
  @media screen and (max-width: 1200px) {
	color: white;
	font-size: 40px; 
  }
  @media screen and (max-width: 500px) {
	font-size: 20px; 
  }
`

export const Divider = styled.div`
  border-left: 2px solid rgb(226, 103, 21);
  height: 45%;
  position:absolute;
  left: 50%;
  @media screen and (max-width: 1548px) {
	display:none;
  }
`

export const HeaderOrangeText = styled.span`
  color:rgb(226, 103, 21);
  text-shadow:1px 1px black;
  font-size:30px;
  @media screen and (max-width: 500px) {
    font-size: 18px; 
    }
`

export const SidePng = styled.div`
  position: relative;
  z-index: 0;
  height:100%;
  width: 50%;
  right:-51%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  animation-delay: 0.5s;
  @media screen and (max-width:1200px) {
  width: 100%;
  right: unset;
	background-size:contain ;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  }
  @media screen and (min-width:1700px) {
    right:-60%;
  }
  @media screen and (max-width:400px) {
  background-size: 120% 96%;
  background-position: 50% 100%;
  }
  @media screen and (max-width:300px) {
  background-size: 130% 95%;
  background-position: 22% 100%;
  }
`
export const SidePngPersonalTraining = styled.div`
  position: relative;
  z-index: 0;
  height:100%;
  width: 50%;
  right:-51%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  animation-delay: 0.5s;
  @media screen and (max-width:1200px) {
  width: 100%;
  right: unset;
	background-size:contain ;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  }
  @media screen and (min-width:1700px) {
    right:-60%;
  }
  @media screen and (max-width:400px) {
  background-size: 120% 96%;
  background-position: 50% 100%;
  }
  @media screen and (max-width:300px) {
  background-size: 130% 95%;
  background-position:60% 100%;
  }
`
export const SidePngYoga = styled.div`
  position: relative;
  height:100%;
  width: 50%;
  right:-51%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  animation-delay: 0.5s;
  @media screen and (max-width:1200px) {
  width: 100%;
  right: unset;
	background-size:contain ;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  }
  @media screen and (min-width:1700px) {
    right:-60%;
  }
  @media screen and (max-width:300px) {
  background-size: 100% 90%;
  background-position:60% 100%;
  }
`
export const SidePngBasketball = styled.div`
  position: relative;
  z-index: 0;
  height:100%;
  width: 50%;
  right:-51%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  animation-delay: 0.5s;
  @media screen and (max-width:1200px) {
  width: 100%;
  right: unset;
	background-size:contain ;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  }
  @media screen and (min-width:1700px) {
    right:-60%;
  }
  @media screen and (max-width:400px) {
  background-size: 120% 96%;
  background-position: 50% 100%;
  }
  @media screen and (max-width:300px) {
  background-size: 130% 95%;
  background-position:60% 100%;
  }
`