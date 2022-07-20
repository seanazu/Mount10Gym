import React, { useEffect,useState } from 'react';
import { EveningLessons, LessonDiv, LessonImage, LessonModalData, LessonModalImage, LessonModalText, LessonName, LessonsScrollmageBar, LessonsTable, LessonsTableBorder, PlusButton, PersonIcon, ScheduleHeader, TableDataCell, TableHeadCell, TableHeader, TimeIcon, WorkoutIcon, LessonBoxModCard, ExitModButton, ExitModSpan } from '../../../Elements/Lessons/Lessons';
import Pilates from '../../../Images And Logos/Schedule/pilates.jpg'
import {LessonModal, MenuTextBox, ExitMenuButton} from '../../../Elements/Lessons/Lessons'
import axios from 'axios';
import {Switch, useRouteMatch} from 'react-router-dom';
import ProtectedRoute from '../../ProtectedRoutes/ProtectedRoute';
import  ModCard  from '../../../components/SiteModification/Bars/LessonBox';



const Schedule = () => {
  const[modalDisplay,setModalDisplay] = useState('none');
  const[modDisplay,setModDisplay] = useState('none');
  const[modalData, setModalData] = useState({
    teacher:'Melanie',
    hour:'07:00',
    lessonName:'pilates',
    imageUrl:Pilates
  });
  const [scheduleArray, setScheduleArray] = useState([]);
  const appApi = process.env.REACT_APP_MY_API;
  const tableArray = [1,2,3,4,5,6,7];
  const { url } = useRouteMatch();

  const closeSideMenu = () =>{
    setModalDisplay('none')
  }
      
  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`${appApi}/lessonBox`).then((lessons) =>{
      const lessonsArray = lessons.data; 
      const localScheduleArray = []
      tableArray.map((int)=>{
        const cellDataArray = []
        lessonsArray.map((lesson)=>{
          if(lesson._id.startsWith(int.toString())){
            cellDataArray.push(
              {
                id:lesson._id,
                comp: 
                <TableDataCell >
                <LessonDiv onClick={()=>{
                  setModalDisplay('block');
                  setModalData({
                    teacher:lesson.teacher,
                    hour:lesson.hour,
                    lessonName:lesson.lessonName,
                    imageUrl:`${appApi}/images/${lesson.image}`
                  })
                }} >
                <LessonImage src={`${appApi}/images/${lesson.image}`}></LessonImage><br/>
                {lesson.lessonName} <br/>
                {lesson.hour}
                </LessonDiv > 
                </TableDataCell>
              
              
              }
              )
          }
        }) 
        
        const idArray = [] ;
        const trData = [] ;
        for(let i = 0 ; i < 6 ; i++ ){
          if(cellDataArray[i]){
            const idToString = cellDataArray[i].id.toString();
            const comp = cellDataArray[i].comp
            if(idArray.length == 6){
              i=6
            }
            else{
              if(idArray[idArray.length - 1] == cellDataArray[i].id-1 || idToString.endsWith(i+1)){
              idArray.push(idToString)
              trData.push(comp)
              
              }else{ 
                idArray.push('hey')
                trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
                if(idToString.endsWith(i+2)){
                  idArray.push(idToString)
                  trData.push(comp)
                }else{
                  idArray.push('hey')
                  trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
                  if(idToString.endsWith(i+3)){
                  idArray.push(idToString)
                  trData.push(comp)
                  }else{
                    idArray.push('hey')
                    trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
                    if(idToString.endsWith(i+4)){
                    idArray.push(idToString)
                    trData.push(comp)
                    }else{
                      idArray.push('hey')
                      trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
                      if(idToString.endsWith(i+5)){
                      idArray.push(idToString)
                      trData.push(comp)
                      }else{
                        idArray.push('hey')
                        trData.push(
                  <TableDataCell>
                    
                  </TableDataCell>)
                        if(idToString.endsWith(i+6)){
                        idArray.push(idToString)
                        trData.push(comp)
                        }else{
                          idArray.push('hey')
                          trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
                        }
                      }
                    }
                  }
                }
              }
            }
            
            
          }else if(!cellDataArray[i] && idArray.length !== 6) {
            idArray.push('hey')
            trData.push(
                  <TableDataCell>
                    <PlusButton onClick={()=>{
                      setModDisplay('block')
                    }}/>
                  </TableDataCell>)
          }

        }
        if(localScheduleArray.length == 4){
          
          localScheduleArray.push(
            <tr>
            <EveningLessons>
              שיעורי ערב
            </EveningLessons>
            </tr>
          )
        }
        localScheduleArray.push(
          <tr>
            {trData}
          </tr>
        )
         
      })
      setScheduleArray(localScheduleArray)
    })
  }, []) 

    return (
        <div>
          <LessonsScrollmageBar/>
          <ScheduleHeader> מערכת שעות שיעורים </ScheduleHeader>
          <LessonsTableBorder >
              <LessonsTable>
                <TableHeader>
                  <tr>
                    <TableHeadCell>שישי</TableHeadCell>
                    <TableHeadCell>חמישי</TableHeadCell>
                    <TableHeadCell>רביעי</TableHeadCell>
                    <TableHeadCell>שלישי</TableHeadCell>
                    <TableHeadCell>שני</TableHeadCell>
                    <TableHeadCell>ראשון</TableHeadCell>
                  </tr>
                </TableHeader>
                <tbody >
                  {scheduleArray}
                </tbody>
              </LessonsTable>
          </LessonsTableBorder>
          
          <LessonModal style={{display:modalDisplay}}>
                <MenuTextBox>
                  <LessonModalImage style={{backgroundImage:`url(${modalData.imageUrl}) `}}>
                    <ExitMenuButton onClick={closeSideMenu} >Hello</ExitMenuButton>
                  </LessonModalImage>
                  <LessonModalData>
                    <LessonName>
                      <PersonIcon/>
                      <LessonModalText>
                       {modalData.teacher}
                      </LessonModalText>
                    </LessonName>
                    <LessonName>
                      <TimeIcon/>
                      <LessonModalText>
                      {modalData.hour}
                      </LessonModalText>
                    </LessonName>
                    <LessonName>
                     <WorkoutIcon/>
                     <LessonModalText>
                      {modalData.lessonName}
                      </LessonModalText>
                    </LessonName>
                  </LessonModalData>
                  <br/>
                </MenuTextBox>
            </LessonModal>

            <LessonBoxModCard style={{display:modDisplay}}>
              <MenuTextBox>
                <Switch>
                 <ProtectedRoute path={`${url}/modStudio`} oldPath={url} isAuth={true} data={'Hello'}  Comp={ModCard} />
                </Switch>
              </MenuTextBox>
            </LessonBoxModCard>

        </div>
    );
};

export default Schedule;