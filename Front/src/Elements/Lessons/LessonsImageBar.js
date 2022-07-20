import styled from 'styled-components'; 

export const CardBox = styled.div`
    height: 720px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:50% 75% ;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const InnerData = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:rgb(255, 255, 255,0.7);
    box-sizing: border-box;
    padding: 40px;
  @media screen and (min-width: 768px){
      width: 50%;
      height: 65%;
  }
`

export const Title = styled.h2`
    font-size: 45px;
    color: black;
    text-align: center;
    font-weight: 700;
    color: #181818;
    text-shadow: 0px 2px 2px rgb(226, 103, 21);
    position: relative;
    margin: 0 0 20px 0;
    @media screen and (min-width: 768px){
      font-size: 65px;
  }

`

export const LinkButton = styled.a`
  text-transform: uppercase;
  background-color:black;
  color:white;
  width:160px;
  font-size:15px;
  font-weight:800;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 100px;
  transition: all .2s;
  position: relative;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

export const Subtitle = styled.time`
    color: rgb(226, 103, 21);
    text-align: center;
    font-size: 25px;
`

