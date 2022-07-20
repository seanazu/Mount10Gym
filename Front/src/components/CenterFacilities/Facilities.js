import React, { useEffect } from 'react';
import { ScrollmageBar } from '../../Elements/Gym/GymElements';
import GridGallery from './GridGallery/GridGallery';
import BaskteballImageBar from './BasketballImageBar/BaskteballImageBar';
import Header from './Header/Header';
import BasketballBar from './PictureAndText/BasketballBar';
import { PageContent } from '../../Elements/Main/NavbarAndHeaderElements';

const Facilities = () => {
        
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return (
        <div style={{minHeight:'60vh'}}>
            <PageContent>
            <Header/>
            <BasketballBar/>
            <BaskteballImageBar/>
            </PageContent>
            <ScrollmageBar>
            <GridGallery/>
            </ScrollmageBar>
        </div>
    );
};

export default Facilities;