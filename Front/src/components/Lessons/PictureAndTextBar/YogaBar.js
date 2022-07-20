import React, { useEffect, useState } from 'react';
import  ModCard  from '../../../components/SiteModification/Bars/LessonBox';
import { Content, Divider, Header, HeaderOrangeText, OuterDiv, SidePngYoga, TextBox } from '../../../Elements/Gym/PictureAndText';
import { Switch, useHistory,useRouteMatch} from 'react-router-dom'
import axios from 'axios';
import ProtectedRoute from '../../ProtectedRoutes/ProtectedRoute';
import { Button } from '@mui/material';


const YogaBar = () => { 
    const history = useHistory();
    const { url } = useRouteMatch();
    const serverUrl = 'textAndImage';
    const[img, setImg] = useState('');
    const appApi = process.env.REACT_APP_MY_API ;
    const[barData,setBarData] = useState({
        header:"",
        subHeader:'',
        firstParagraph:'',
        secondParagraph:'',
        image:'' 
    });

    useEffect(()=>{
        axios.get(`${appApi}/textAndImage/studio`).then((yogaBar)=>{
            if(yogaBar.data){
                setImg(`${appApi}/images/${yogaBar.data.image}`)
                setBarData(yogaBar.data)
            }else{
                alert('url incorrect')
            }
        }).catch(err=>{
            alert(err)
        });
        
    },[])
 
    const displayMod = () =>{
        history.push('/lessons/modStudio')
    }
    
    const hideMod = () =>{
        history.push('/lessons')
    }

    return (
        <div>
	        <OuterDiv >
            	<TextBox>
            		<Content>
                       <Header>{barData.header}<br/><HeaderOrangeText>{barData.subHeader}</HeaderOrangeText></Header>
                       <br/>
                        {barData.firstParagraph}
                        <br/>
                        <br/>
                        {barData.secondParagraph}
                        <br/>
                       <Button color='primary' variant="outlineds" size="medium" onClick={displayMod}> ערוך </Button>{' '}
                       <Button color='primary' variant="contained" size="medium" onClick={hideMod} > סגור חלון עריכה </Button>
                     </Content>    
            	</TextBox>
                <Divider></Divider>
            	<SidePngYoga style={{backgroundImage:`url(${img})`}} ></SidePngYoga>
            </OuterDiv>

            <Switch>
              <ProtectedRoute path={`${url}/modStudio`} oldPath={url} isAuth={true} data={{...barData}} url={serverUrl} Comp={ModCard} />
            </Switch>
            
        </div>
    );
};

export default YogaBar;