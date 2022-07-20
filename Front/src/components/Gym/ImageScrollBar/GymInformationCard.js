import React from 'react';
import { ScrollmageBar } from '../../../Elements/Gym/GymElements';
import './GymInformationCard.css'

const GymInformationCard = () => {
    return (
        <div>
            <ScrollmageBar>
            <div className='body'>
            <div class="container">
              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>&#8362;260</h3>
                    <p style={{direction:'rtl'}}> מנוי שנתי לחדר כושר ולשיעורי המרכז.</p>
                  </div>
                </div>
              </div>
            
              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>&#8362;1600</h3>
                    <p style={{direction:'rtl'}}> ל-12 אימונים אישיים</p>
                  </div>
                </div>
              </div>
            
            </div>
            </div>
          </ScrollmageBar>
        </div>
    );
};

export default GymInformationCard;