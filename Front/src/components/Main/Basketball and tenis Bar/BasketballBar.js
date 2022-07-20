import React from 'react';
import '../../../Styles/HoverBar.css'
import BasketballImage from '../../../Images And Logos/Basketball-Tenis/0O5A3354.JPG'
import { TextBox } from '../../../Elements/Gym/GymElements';
import { Typography } from '@mui/material';

const TenisBar = () => {
    return (
        <div className='border-box'  >
          <div className="blog-card spring-fever" style={{ background:`url(${BasketballImage})  no-repeat`,backgroundSize:'cover',backgroundPosition:'20% 100%'}}>
            <div className="title-content">
              <h3 className='cardHeader'><span  className='header'>מגרש כדורסל</span></h3>
              <div className="intro"> <span>קרא עוד...</span> </div>
            </div>
            <div className="card-info">
              האולם מכיל 500 מושבים. נבנה בשנת 2013 נחנך בשנת 2014
              הגודל אפשר לקחת מהתיק במחלקת הנדסה אצל ליאל/אדווה
              יש מחיצה לחלוקת המגרש ל-2 להופעות של עד 250 איש.
              <br/>
              <br/>
              יכול לשמש למגוון תחרויות ספורט, ג’ודו טקוונדו ועוד
              גם כאולם להופעות ואירועים בחלל סגור עד 500 איש
              ניתן לבנות במה להופעות באולם
              <span>.</span>   
            </div>
            <div className="utility-info">
            </div>
            <div className="gradient-overlay"></div>
            <div className="color-overlay"></div>
          </div>
          <br/>
        </div>
    );
};

export default TenisBar;