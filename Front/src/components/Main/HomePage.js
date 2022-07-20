import React from 'react';
import Header from './NavbarAndHeader/Header';
import BasketballBar from './Basketball and tenis Bar/BasketballBar';
import PagesCards from './GymAndLessonsCards/PagesCards';
import Schedule from '../Lessons/Schedule/Schedule';
import { PageContent } from '../../Elements/Main/NavbarAndHeaderElements';
import HeaderContent from './NavbarAndHeader/HeaderContent';



const HomePage = () => {
    
    return (
        <div>
            <Header/>
            <PageContent>
            <HeaderContent/>
            <PagesCards />
            <br/>
            <BasketballBar/>
            <br/>
            </PageContent>
            <Schedule/>
            
        </div>
    );
};

export default HomePage;