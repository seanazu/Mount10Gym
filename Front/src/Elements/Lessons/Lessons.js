import styled from 'styled-components'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FrontPageImage from '../../Images And Logos/Mount10 Logo/FrontPage.jpg';
import FrontPagePhoneImage from '../../Images And Logos/Mount10 Logo/FrontPagePhone.jpg';
import { styled as styledReactElement } from '@mui/system';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const LessonsScrollmageBar = styled.div`
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
      background-size: 150% 95%;
  
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }
  }
`

export const ScheduleHeader = styled.div`
  text-align:center;
  margin-top:50px;
  color:rgb(226, 103, 21);
  text-shadow:1px 1px black;
  font-size:50px;
`

export const LessonsTableBorder = styled.section`
  margin: auto;
  background:rgb(255,255,255,0.7);
  height:600px;
  max-width: 900px;
  overflow: scroll;
  &::-webkit-scrollbar-track
  {
    border-radius: 10px;
    background-color: rgb(255,255,255,0.3);
  }
  
  &::-webkit-scrollbar
  {
    width: 12px;
    background-color: rgb(255,255,255,0.3);
  }
  
  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: black;
  }
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    max-width:600px;
  }
`

export const LessonsTable = styled.table`
  table-layout: fixed;
  width:900px;
  border-spacing:0px;
  overflow-x:auto;
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    width:610px;
  }
`

export const TableHeader = styled.thead`
  background-color: rgba(0, 0, 0, 0.3);
`

export const TableHeadCell = styled.th`
  height: 130px;
  background-color: rgb(0, 0, 0);
  text-align: center;
  font-weight: 500;
  font-size: 35px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    height: 80px;
  }
`

export const TableDataCell = styled.td`
  font-family: "Alef Hebrew", sans-serif;
  padding:1.2%;
  text-align: center;
  vertical-align:middle;
  font-weight: 300;
  font-size: 15px;
  color: rgb(0, 0, 0);
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px 0 rgba(0,0,0,0.2);
  font-weight: 800;
  transition: 0.3s;
`
export const LessonImage = styled.img`
  width:125px;
  border-radius:10%;
  @media screen and (max-width: 800px) {
    width:85px;
  }
`
export const LessonDiv = styled.div`
  height:50%;
  width:125px;
  border-radius:10%;
  background:-webkit-radial-gradient( center center,circle cover,white 50%, #ccc);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  @media screen and (max-width: 800px) {
    width:85px;
    height:40%;
  }
  &:hover{
    transform: scale(1.10);
  }
`
export const EveningLessons = styled.h2`
color:white;
 text-shadow:1px 1px black;
 display:absolute;
 font-size: 55px;
 margin-right:-500%;
`

export const LessonModal = styled.div`
  position:fixed ;
  color: black;
  top:0;
  right:0px;
  height:100%; 
  width: 100% ;
  background-color: rgb(0,0,0,0.4);
  z-index:45;

`

export const MenuTextBox = styled.p`
  margin-top:10%;
  width:60%;
  margin:10% auto ;
  color: black;
  border-radius: 15px;
  height: 600px;
  max-width:750px ;
  background:-webkit-radial-gradient( center center,circle cover,white 50%, #ccc);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  @media screen and (max-width:1000px){
    height: 550px;
    width: 90%;
    margin-top:15%;
  }
  @media screen and (max-width:600px){
    height:auto;
    width: 90%;
    margin-top:20%;
  }
  
`

export const ExitMenuButton = styled(CloseOutlinedIcon)`
  margin-left:91%;

` 

export const ExitModButton = styled(CloseOutlinedIcon)`

`
export const ExitModSpan = styled.span`
  position: absolute;
  margin-left:90%;
  margin-top:-5%;

`
export const LessonModalImage = styled.p`
  background-size:cover;
  background-position: 50%;
  height: 50%;
  border-radius: 15px;
  @media screen and (max-width:600px){
    height: 250px;
  }

`

export const LessonModalData = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width:600px){
    grid-template-columns: 1fr ;
    height: auto;
  }
  

`

export const LessonName = styled.span`
  font-size: 32px;
  margin: auto;
  margin-top: 15px;
  background-color: rgb(251,79,20,0.7);
  width: 96%;
  height: 44%;
  font-weight: 300;
  border-radius: 15px;
  border-color: black;
  direction: rtl;
  @media screen and (max-width:600px){
    height:95px;
    margin-top: 15px;
  }
`
export const LessonModalText = styled.div`
  font-size: 30px;
  color: 	rgb(0,0,0);
  border-radius: 15px;
  text-shadow: 
    1px 0px 1px #fff, 0px 1px 1px #fff, 
    1px 1px 1px #fff, 1px 1px 1px #fff;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  @media screen and (max-width:600px){
    font-size:25px;
  }
`

export const LessonBoxModCard = styled.div`
  position:fixed ;
  color: black;
  top:0;
  right:0px;
  height:100%; 
  width: 100% ;
  background-color: rgb(0,0,0,0.4);
  z-index:45;

`

export const TimeIcon = styledReactElement(AccessTimeIcon)`
  font-size: 85px;
  margin-top:20%;
  @media screen and (max-width:600px){
    font-size:45px;
    margin-top:0%;
  }
`

export const WorkoutIcon = styledReactElement(FitnessCenterIcon)`
  font-size: 85px;
  margin-top:20%;
  @media screen and (max-width:600px){
    font-size:45px;
    margin-top:0%;
  }
`

export const PersonIcon = styledReactElement(PersonOutlineIcon)`
  font-size: 85px;
  margin-top:20%;
  @media screen and (max-width:600px){
    font-size:45px;
    margin-top:0%;
  }
`
export const PlusButton = styledReactElement(AddCircleOutlineIcon)`
  font-size: 50px ; 
  background:-webkit-radial-gradient( center center,circle cover,white 50%, #ccc);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  border-radius:50%;
    &:hover{
    transform: scale(1.10);
  }
`
