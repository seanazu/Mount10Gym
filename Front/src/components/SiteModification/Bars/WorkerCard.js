import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from "react-dropzone"
import { Button} from '@mui/material';
import { FormBox, ModForm, ModDiv, ImageDropBox, ImageDropText, ImageInput, ImagePreview, InputInformation, ModCard, ModHeader, TextBox, FormLayout, ParagraphTextBox } from '../../../Elements/barModificationCards/pictureAndTextMod';

const WorkerCard = ({url,id,barData}) => {
    const [files, setFiles] = useState([]);
    const[headerInputDisplay,setHeaderInputDisplay] = useState('unset');
    const[subHeaderInputDisplay,setSubHeaderInputDisplay] = useState('unset');
    const[firstParagraphInputDisplay,setFirstParagraphInputDisplay] = useState('unset');
    const[secondParagraphInputDisplay,setSecondParagraphInputDisplay] = useState('unset');
    const[thirdParagraphInputDisplay,setThirdParagraphInputDisplay] = useState('unset');
    const[imageInputDisplay,setimageInputDisplay] = useState('unset');
    const [barObj, setBarData] = useState({
      _id:'',
      header:'',
      subHeader:'',
      firstParagraph:'',
      secondParagraph:'',
      thirdParagraph:'', 
    });

    
    useEffect(async()=>{
        const url = 'textAndImage'
        const id = 'hello'
        const objData = await axios.get(`http://localhost:8080/${url}/${id}`);
        const barData = objData.data;
        console.log(barData)
        if(barData.header){
             setHeaderInputDisplay('unset')
        }
        if(barData.subHeader){
             setSubHeaderInputDisplay('unset')
        }
        if(barData.firstParagraph){
             setFirstParagraphInputDisplay('unset')
        }
        if(barData.secondParagraph){
             setSecondParagraphInputDisplay('unset')
        }
        if(barData.thirdParagraph){
             setThirdParagraphInputDisplay('unset')
        }
        if(barData.image){
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
      
        const result = await axios.post('http://localhost:8080/textAndImage', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data);
        return result.data
        
    }

    useEffect(()=>{
      setBarData({...barObj, barName:'heyya'})
    },[])


    const submit = event => {
        event.preventDefault()
        updateData({image: files[0], barObj: {...barObj}})
      }

      const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
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
            <TextBox  onChange={e => setBarData({...barObj,header:e.target.value})} />
            </FormBox>

            <FormBox style={{display:subHeaderInputDisplay}}>
            <InputInformation> כותרת משנה:</InputInformation>
            <br/>
            <TextBox  onChange={e => setBarData({...barObj,subHeader:e.target.value})}  />
            </FormBox>
            
            <FormBox style={{display:firstParagraphInputDisplay}}>
            <InputInformation> פסקה ראשונה:</InputInformation>   
            <br/>    
            <ParagraphTextBox
             onChange={e => setBarData({...barObj,firstParagraph:e.target.value})}
            />
            </FormBox>

            <FormBox type="text"  style={{display:secondParagraphInputDisplay}}>
             <InputInformation> פסקה שניה:</InputInformation>      
             <br/> 
             <ParagraphTextBox
              onChange={e => setBarData({...barObj,secondParagraph:e.target.value})}
            />
            </FormBox>
            <FormBox style={{display:thirdParagraphInputDisplay}}>
             <InputInformation> פסקה שלישית:</InputInformation>      
             <br/> 
             <ParagraphTextBox
              onChange={e => setBarData({...barObj,thirdParagraph:e.target.value})}
            />
            </FormBox>
            </FormLayout>
            <br/><br/>
            <FormBox style={{display:imageInputDisplay}}>
            <ImageDropBox {...getRootProps()} >
               <ImageInput {...getInputProps()} />
              <ImageDropText> הורד\י תמונה כאן{imagesDrop}</ImageDropText>
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

export default WorkerCard;