import React from 'react';
import { ScrollmageBar } from '../../../Elements/Gym/GymElements';
import '../../../Styles/GymInformationCard.css'
import Pricing from '../../About/Pricing/Pricing'

const GymPricing = () => {
    return (
        <div>
            <ScrollmageBar>
              <Pricing/>
              <br/>
            </ScrollmageBar>
        </div>
    );
};

export default GymPricing;