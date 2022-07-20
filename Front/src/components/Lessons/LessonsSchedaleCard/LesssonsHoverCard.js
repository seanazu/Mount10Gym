import React from 'react';
import YogaInstructor from '../../../Images And Logos/LessonsPng/YogaInstructor.JPG'
import {Link} from 'react-router-dom'
import { CardBox,InnerData,Title,Subtitle, LinkButton } from '../../../Elements/Lessons/LessonsImageBar';


const LesssonsHoverCard = () => {
    return (
        <div> 
            <CardBox style={{backgroundImage:`url(${YogaInstructor})`}}>
                <InnerData>
                  <Title>Mount 10 Studio</Title>
                  <Subtitle>השיעורים שלנו : יוגה, פילאטיס, בודי באלאנס</Subtitle>
                  <br/>
                  <Link to='/schedule'><LinkButton >לו"ז שיעורים</LinkButton></Link>
                </InnerData>
            </CardBox>
        </div>
    );
};

export default LesssonsHoverCard;