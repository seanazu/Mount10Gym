import React from 'react';
import { Header, TextBox,HeadingPrimary,HeadingPrimaryMain, HeadingPrimarySub,HeaderButton } from '../../Elements/Gym/GymElements';
import ArticleCard from './ArticleCard';


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
                	<HeadingPrimaryMain>מאמרים</HeadingPrimaryMain>
                	<HeadingPrimarySub>תזונה,בריאות וכושר</HeadingPrimarySub>
                </HeadingPrimary>
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