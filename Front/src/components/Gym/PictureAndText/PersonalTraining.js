import React, { useEffect, useState } from 'react';
import PersonalTraining from '../../../Images And Logos/GymPng/PersonalTraining.png'
import { Content, Divider, Header, HeaderOrangeText, OuterDiv, SidePngPersonalTraining, TextBox } from '../../../Elements/Gym/PictureAndText';
import axios from 'axios';


const PictureAndText = () => {
    const[barObj , setBarObj] = useState({
        header:"",
        subHeader:'',
        firstParagraph:'',
        secondParagraph:'',
        image:''
    })
    const[img, setImg] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:8080/textAndImage/personalTraining')
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
    return (
        <div >
	        <OuterDiv>
            	<TextBox>
            		<Content >
                       <Header>{barObj.header} <br/><HeaderOrangeText > {barObj.subHeader}</HeaderOrangeText></Header>
                       <br/>
                       {barObj.firstParagraph}
                       <br/><br/>  
                       {barObj.secondParagraph}                  
                       </Content>    
            	</TextBox>
                <Divider></Divider>
            	<SidePngPersonalTraining style={{backgroundImage:`url(${img})`}} ></SidePngPersonalTraining>
            </OuterDiv>
        </div>
    );
};

export default PictureAndText;