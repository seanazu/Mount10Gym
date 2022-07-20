import React from 'react';
import { Header as PageHeader, HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySub, TextBox } from '../../../Elements/Gym/GymElements';
import BasketballCourtImage from '../../../Images And Logos/Basketball-Tenis/0O5A3354.JPG'

const Header = () => {
    return (
        <div>
            <PageHeader
              style={{backgroundImage:`url(${BasketballCourtImage})`, backgroundPosition:'74% 85%' }} >
           </PageHeader>
           <TextBox>
                <HeadingPrimary>
                	<HeadingPrimaryMain>מתקני המרכז</HeadingPrimaryMain>
                	<HeadingPrimarySub>חוגי ספורט לכל אחד</HeadingPrimarySub>
                </HeadingPrimary>
            </TextBox>
        </div>
    );
};

export default Header;