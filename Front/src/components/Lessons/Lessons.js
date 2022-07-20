import React, { useEffect } from 'react';
import { Header, TextBox,HeadingPrimary,HeadingPrimaryMain, HeadingPrimarySub } from '../../Elements/Gym/GymElements';
import { LessonsScrollmageBar } from '../../Elements/Lessons/Lessons';
import GridGallery from './GridGallery/GridGallery';
import LesssonsHoverCard from './LessonsSchedaleCard/LesssonsHoverCard';
import YogaBar from './PictureAndTextBar/YogaBar';
import LessonsPriceCard from './LessonsPriceCard/LessonsPriceCard';
import { PageContent } from '../../Elements/Main/NavbarAndHeaderElements';
import YogaHeaderImage from '../../Images And Logos/LessonsPng/YogaHeader.jpg';


const Lessons = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 


    return (
        <div>
           <PageContent>
            <Header 
            style={{
                backgroundImage: `url(${YogaHeaderImage})`}} >
           </Header>
           <TextBox>
                <HeadingPrimary>
                    <HeadingPrimaryMain>שיעורי סטודיו</HeadingPrimaryMain>
                    <HeadingPrimarySub>מערכת שיעורים חדשה ומגוונת</HeadingPrimarySub>
                </HeadingPrimary>
           </TextBox>
           <YogaBar />
           </PageContent>
           <LessonsPriceCard/>
           <LesssonsHoverCard/>
           <LessonsScrollmageBar >
           <GridGallery/>
           </LessonsScrollmageBar>
        </div>
    );
};

export default Lessons;