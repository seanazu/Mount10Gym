import React,{useState,useEffect} from 'react';
import { Content, Divider, Header, HeaderOrangeText, OuterDiv, SidePng, TextBox } from '../../../Elements/Gym/PictureAndText';
import axios from 'axios';
import  ModCard  from '../../../components/SiteModification/Bars/LessonBox';
import { Route, useHistory, useRouteMatch,Switch } from 'react-router-dom';
import { Button } from '@mui/material';


const PictureAndText = () => {
    const[barObj , setBarObj] = useState({})
    const[img, setImg] = useState('');


    let history = useHistory();
    let { url } = useRouteMatch();
    const serverUrl = 'textAndImage';

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_MY_API}/textAndImage/modernGym`)
        .then((barData)=>{
            if(barData.data){
                setBarObj(barData.data)
                setImg(`${process.env.REACT_APP_MY_API}/images/${barData.data.image}`)
            }else{
                alert('url incorrect')
            }
        }).catch(err=>{
            alert(err)
        });
    },[])



    const displayMod = () =>{
        history.push(`${url}/modModernGym`)
    }
    const hideMod = () =>{
        history.push(`${url}`)
    }


    return (
        <div>
	        <OuterDiv>
            	<TextBox>
            		<Content>
                       <Header>{barObj.header} <br/><HeaderOrangeText > {barObj.subHeader}</HeaderOrangeText></Header>
                       <br/>
                       {barObj.firstParagraph}
                       <br/><br/>
                       {barObj.secondParagraph} 
                       <br/>
                       <Button color='primary' variant="contained" size="small" onClick={displayMod}> ערוך </Button>{' '}
                       <Button color='primary' variant="contained" size="small" onClick={hideMod} > סגור חלון עריכה </Button>  
                       <br/>
                       </Content>    
            	</TextBox>
                <Divider></Divider>
            	<SidePng style={{backgroundImage:`url(${img})`}} ></SidePng>
            </OuterDiv>
            
            <Switch>
              <Route path={`${url}/modModernGym`}  component={() => <ModCard oldPath={url} data={{...barObj}} url={serverUrl} />}  />
            </Switch>
            
        </div>
    );
};

export default PictureAndText;