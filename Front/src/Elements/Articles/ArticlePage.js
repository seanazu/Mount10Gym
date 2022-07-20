import styled from 'styled-components'

export const AtriclePage = styled.div`
  display: grid;
  grid-template-columns:  50% 50%;
  @media screen and (max-width:1200px){
      display: block;
  }
`

export const ArticleHeader = styled.header`
  background-image: url(http://cdn.shopify.com/s/files/1/2978/6072/articles/Fail-proof_Bulking_Meal_Plan_for_Muscle_Building_MealPlanMagic_Meal_Plan_Software_Template_Prep_1200x1200.jpg?v=1524677135);
  background-size: 100% 50%;
  background-position: center;
  background-size: cover;
  height: 60vh;
  position: relative;
  @media screen and (min-width:600px){
    height: 80vh;
  }
  @media screen and (min-width:1200px){
    height: 100vh;
    width: 50vw;
  }
`

export const ArticleHeaderText = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-align: right;
  max-width: 40%;
  @media screen and (min-width:600px){
    max-width: 70%;
  }
`
export const ArticleHeaderTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0;
  @media screen and (min-width:600px){
    font-size: 5.25rem;
  }
`


export const ArticleHeaderByLine = styled.h2`
  color: white;
  @media screen and (min-width:600px){
      font-size: 1.5rem;
  }
`
export const ArticleText = styled.div`
  max-width: 650px;
  margin: auto;
  
`
export const ArticleTextLead = styled.div`
  @media screen and (min-width:1200px){
      padding: 2rem 0 0rem 3rem;
  }
  @media screen and (min-width:600px){
      padding: 3rem 0 3rem 2rem;
  }
`

export const TextLeadHeader = styled.h3`
  font-weight: 300;
  text-align: center;
  margin: 0;
  line-height: 1.5;
  font-size:18px;
  font-weight:800;
  text-align:right;
  @media screen and (min-width:600px){
    text-align: right;
    font-size: 1.5rem;
  }
  @media screen and (min-width:1200px){
    font-size: 1.1rem;
  }
`

export const ArticleContent = styled.p`
  font-size: 0.95rem;
  text-align:right
`