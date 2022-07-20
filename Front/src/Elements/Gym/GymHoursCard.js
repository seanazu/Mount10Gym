import styled from 'styled-components'


export const Content = styled.div`
top:15px;
left:15px;
right:15px;
bottom:200px;
border:1px solid #f0a591;
padding:30px;
text-align:center;
box-shadow: 0 5px 10px rgba(9,0,0,0.5);
@media screen and (max-width:850px){
  font-size:10px;
  height:99%;
  width:99%
}

` 

export const Box = styled.div`
  margin:auto;
  width: 650px;
  height: 300px;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: white;
  padding: 10px;
  @media screen and (max-width:850px){
    width:320px;;
    height:250px;
  }
`
export const ContentHeader = styled.div`
  font-size: 19px;
  @media screen and (max-width:850px){
    font-size:18px;
  }
`