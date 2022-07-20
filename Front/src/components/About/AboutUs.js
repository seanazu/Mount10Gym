import React, { useEffect } from 'react';
import Header from './Header/Header'
import ContactInfo from './ContactInfo/ContactInfoBar'
import GymPricing from './Pricing/Pricing'
import { Title } from '../../Elements/ContactUs/ContactUs';

const AboutUs = () => {
        
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return (
        <div>
            <Header/>
            <Title>מחירון</Title>
            <GymPricing/>
            <br/>
            <Title>עלינו</Title>
            <ContactInfo/>
            <br/>
        </div>
    );
};

export default AboutUs;