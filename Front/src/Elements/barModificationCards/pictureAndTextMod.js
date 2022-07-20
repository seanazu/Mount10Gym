import styled from 'styled-components'

export const ModDiv = styled.div`
  
`


export const ModCard = styled.div`
  position: relative;
  top: 35%;
  border-radius:15px;
  margin:auto;
  margin-bottom:25px;
  margin-top: 1%;
  max-width: 1100px;
  width: 95%;
  direction:rtl;
  color: black;
  text-decoration: none;
  transition-property: color;
  transition-delay: 0.15s;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  background:-webkit-radial-gradient( center center,circle cover,white 90%, #ccc);
  background-repeat: no-repeat;
  @media screen and (max-width: 800px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`
export const FormLayout = styled.div`
margin-top: -4%;
  display :grid;
  grid-template-columns: 1fr 1fr;
  row-gap:40px;
  align-items: center;
  @media screen and (max-width: 500px) {
    grid-template-columns: auto;
    
  }

`

export const FormBox = styled.div`


`


export const ModHeader = styled.p`
  font-family: "Alef Hebrew", sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top:0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  font-size: 70px;
  color: white;
  background-color: rgb(0,0,0,.8);
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgb(226, 103, 21);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  @media screen and (max-width:700px){
    font-size: 50px;
  }
  
`

export const InputInformation = styled.h2`
  font-family: "Alef Hebrew", sans-serif;
  font-size: 40px;
  color: black;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgb(226, 103, 21);
  border-radius: 10px;
  width: 80%;
  margin-bottom: -20px;
  text-align: right;
  margin-right: 30px;
  margin-top: -5%;
  @media screen and (max-width:700px){
    font-size: 30px;
  }
  
`
export const TextBox = styled.input`
  width:90%;
  direction: rtl;
  right: 2%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  border-style:unset;
  height:45px;
  border-radius: 15px;
  font-family: "Alef Hebrew", sans-serif;
  font-weight: 700;
  font-size: 20px;
  @media screen and (max-width:700px){
    font-size: 16px;
  }
  
`
export const ParagraphTextBox = styled.textarea`
  width:90%;
  direction: rtl;
  right: 2%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  border-style:unset;
  min-height:100px;
  border-radius: 15px;
  font-family: "Alef Hebrew", sans-serif;
  font-weight: 700;
  font-size: 20px;
  @media screen and (max-width:700px){
    font-size: 16px;
  }
`
export const ImageInput = styled.input`

`
export const ImageDropBox = styled.div`
  border-color: rgb(0,0,0,.4);
  border-radius: 40px;
  border-width: 0.4px;
  width:80%;
  margin: auto;
  margin-bottom:10px;
  max-width: 550px;
  border-style: solid;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  color: black;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 2px 2px rgb(226, 103, 21);
  font-size: 25px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const ImageDropText = styled.p`
     
`
export const ImagePreview = styled.img`
  width:80%;
`
export const ModForm = styled.form`
  
`
export const DefaultImage = styled.img`
  height:300px;
  @media screen and (max-width:400px){
    height:200px;
  }
`