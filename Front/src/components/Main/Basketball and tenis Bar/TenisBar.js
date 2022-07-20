import React from 'react';
import '../../../Styles/HoverBar.css'
import BasketballImage from '../../../Images And Logos/Basketball-Tenis/0O5A3354.JPG'

const TenisBar = () => {
    return (
        <div class='border-box'  >
          <div class="blog-card spring-fever" style={{ background:`url(${BasketballImage})  no-repeat`,backgroundSize:'cover',backgroundPosition:'20% 100%'}}>
            <div class="title-content">
              <h3><span  class='header'>מגרש כדורסל</span></h3>
              <div class="intro"> <span>קרא עוד...</span> </div>
            </div>
            <div class="card-info">
              
              האולם מכיל 500 מושבים. נבנה בשנת 2013 נחנך בשנת 2014
              <br/>
              הגודל אפשר לקחת מהתיק במחלקת הנדסה אצל ליאל/אדווה
              יש מחיצה לחלוקת המגרש ל-2 להופעות של עד 250 איש.
              <br/>
              <br/>
              יכול לשמש למגוון תחרויות ספורט, ג’ודו טקוונדו ועוד
              גם כאולם להופעות ואירועים בחלל סגור עד 500 איש
              ניתן לבנות במה להופעות באולם
              <span>.</span>             
            </div>
            <div class="utility-info">
            </div>
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
          </div>
          <br/>
        </div>
    );
};

export default TenisBar;