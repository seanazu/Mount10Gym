import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from "react-dropzone"
import { Button} from '@mui/material';
import { FormBox, ModForm, ModDiv, ImageDropBox, ImageDropText, ImageInput, ImagePreview, InputInformation, ModCard, ModHeader, TextBox, FormLayout, ParagraphTextBox, DefaultImage } from '../../../Elements/barModificationCards/pictureAndTextMod';
import { useHistory } from 'react-router-dom';


const LessonBox = (props) => {
    const[files, setFiles] = useState([]);
    const[headerInputDisplay,setHeaderInputDisplay] = useState('none');
    const[subHeaderInputDisplay,setSubHeaderInputDisplay] = useState('none');
    const[firstParagraphInputDisplay,setFirstParagraphInputDisplay] = useState('none');
    const[secondParagraphInputDisplay,setSecondParagraphInputDisplay] = useState('none');
    const[thirdParagraphInputDisplay,setThirdParagraphInputDisplay] = useState('none');
    const[imageInputDisplay,setimageInputDisplay] = useState('none');
    const[defaultImageDisplay,setDefaultImageDisplay] = useState('unset')
    const [barObj, setBarData] = useState({
      _id:'',
      header:'',
      subHeader:'',
      firstParagraph:'',
      secondParagraph:'',
      thirdParagraph:'', 
    });
    let history = useHistory()

    
    useEffect(()=>{  
      setBarData(props.data);   
      if(props.data.header){
           setHeaderInputDisplay('unset')
      }
      if(props.data.subHeader){
           setSubHeaderInputDisplay('unset')
      }
      if(props.data.firstParagraph){
           setFirstParagraphInputDisplay('unset')
      }
      if(props.data.secondParagraph){
           setSecondParagraphInputDisplay('unset')
      }
      if(props.data.thirdParagraph){
           setThirdParagraphInputDisplay('unset')
      }
      if(props.data.image){
           setimageInputDisplay('unset')
      }
    },[])

    const updateData = async({image, barObj}) =>{
      const formData = new FormData();
      formData.append("image",image );
      formData.append("_id", barObj._id);
      formData.append("header", barObj.header);
      formData.append("subHeader", barObj.subHeader);
      formData.append("firstParagraph", barObj.firstParagraph);
      formData.append("secondParagraph", barObj.secondParagraph);
      formData.append("thirdParagraph", barObj.thirdParagraph);
      console.log(formData)
      const result = await axios.put(`${process.env.REACT_APP_MY_API}/${props.url}/${props.data._id}`, formData, { headers: {'Content-Type': 'multipart/form-data',
      'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDUwNTIzNDB9.qHXpnfvlUM_Pf2S3cCmVPyIj-JlakAZrxzA9OGyH0ac'}})
      alert(result.data) 
      history.push(props.oldPath)      
    }


    const submit =async(event)  => {
        event.preventDefault()
        let image = props.data.image
        console.log(props.data.image)
        if(defaultImageDisplay == 'none'){
          image = files[0]
        }
        await updateData({image: image, barObj: barObj}) 
      }

      const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
          setDefaultImageDisplay('none')
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
              
            )
          )
        },
      })

      const imagesDrop = files.map((file) => (
        <p key={file.name}>
            <ImagePreview src={file.preview}  alt="preview" />
        </p>
      ))

    return (
    <ModDiv>
        <ModCard>
          <ModHeader >חלון שינויים </ModHeader><br/><br/>
          <ModForm onSubmit={submit}>
            <FormLayout>
            <FormBox style={{display:headerInputDisplay}}>
            <InputInformation>כותרת:</InputInformation>
            <br/>
            <TextBox defaultValue={props.data.header} onChange={e => setBarData({...barObj,header:e.target.value})} />
            </FormBox>

            <FormBox style={{display:subHeaderInputDisplay}}>
            <InputInformation> כותרת משנה:</InputInformation>
            <br/>
            <TextBox defaultValue={props.data.subHeader} onChange={e => setBarData({...barObj,subHeader:e.target.value})}  />
            </FormBox>
            
            <FormBox style={{display:firstParagraphInputDisplay}}>
            <InputInformation> פסקה ראשונה:</InputInformation>   
            <br/>    
            <ParagraphTextBox defaultValue={props.data.firstParagraph}
             onChange={e => setBarData({...barObj,firstParagraph:e.target.value})}
            />
            </FormBox>

            <FormBox type="text"  style={{display:secondParagraphInputDisplay}}>
             <InputInformation> פסקה שניה:</InputInformation>      
             <br/> 
             <ParagraphTextBox defaultValue={props.data.secondParagraph}
              onChange={e => setBarData({...barObj,secondParagraph:e.target.value})}
            />
            </FormBox>
            <FormBox style={{display:thirdParagraphInputDisplay}}>
             <InputInformation> פסקה שלישית:</InputInformation>      
             <br/> 
             <ParagraphTextBox defaultValue={props.data.thirdParagraph}
              onChange={e => setBarData({...barObj,thirdParagraph:e.target.value})}
            />
            </FormBox>
            </FormLayout>
            <br/><br/>
            <FormBox style={{display:imageInputDisplay}}>
            <ImageDropBox {...getRootProps()} >
               <ImageInput {...getInputProps()} />
              <ImageDropText> הורד\י תמונה כאן{imagesDrop}
              <br/>
                 <DefaultImage style={{display:defaultImageDisplay}} src={`${process.env.REACT_APP_MY_API}/images/${props.data.image}`} />
              </ImageDropText>
            </ImageDropBox>
            </FormBox>
            <Button color='inherit' variant="outlined" type="submit">שמור שינויים</Button>	                     
        </ModForm>
        <br/>
					 
        </ModCard >
        <br/>
    </ModDiv>
    );
};

export default LessonBox;