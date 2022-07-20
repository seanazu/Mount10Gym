import React from 'react';
import { Link } from 'react-router-dom';
import { CardBox,InnerData,Title,Subtitle, LinkButton } from '../../../Elements/Lessons/LessonsImageBar';
import BasketballBar from '../../../Images And Logos/Basketball-Tenis/BsketballBar.jpg'

const BaskteballBar = () => {
    return (
        <div>
            <CardBox style={{backgroundImage:`url(${BasketballBar})`}}>
                <InnerData>
                  <Title>Mount 10 Basketball</Title>
                  <Subtitle>חוגי כדורסל לכל גיל </Subtitle>
                  <br/>
                  <Link to='/about_us'><LinkButton >שעות פתיחה</LinkButton></Link>
                </InnerData>
            </CardBox>
        </div>
    );
};

export default BaskteballBar;