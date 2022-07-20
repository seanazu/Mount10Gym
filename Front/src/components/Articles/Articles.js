import React from 'react';
import PagesCards from '../Main/GymAndLessonsCards/PagesCards';
import { Header, TextBox,HeadingPrimary,HeadingPrimaryMain, HeadingPrimarySub,HeaderButton } from '../../Elements/Gym/GymElements';
import ArticleCard from './ArticleCard';
import Form from './FormTest/Form';


const Articles = () => {
    return (
        <div>
           <Header 
            style={{
            backgroundImage: 'url(https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg)'
            }}>
           </Header>
           <TextBox>
                <HeadingPrimary>
                	<HeadingPrimaryMain>Heading Primary Main</HeadingPrimaryMain>
                	<HeadingPrimarySub>The secondary heading</HeadingPrimarySub>
                </HeadingPrimary>
                <HeaderButton>Discover our tours</HeaderButton>
            </TextBox>
            <br/>
            <br/>
            <br/>
            <br/>
            <ArticleCard/>
        </div>
    );
};

export default Articles;