import React from 'react';
import { useHistory,Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../../../Styles/Footer.css'



const Footer = () => {

    return (
        <div className='body'>
           <footer class="footer">
             <div class="footer__addr">
               <h1 class="footer__logo">Mount 10</h1>
                   
               <h2>כתובת</h2>
               
               <address>
                 רחוב הפסגה הר אדר <br/>
                     
               </address>
             </div>
             
             <ul class="footer__nav">
               <li class="nav__item">
                 <h2 class="nav__title">Social Media</h2>
           
                 <ul class="nav__ul">
                   <li>
                     <a href='https://www.facebook.com/Mount-10-115353492476959' ><FacebookIcon style={{fontSize:'medium'}}/> Mount 10</a>
                   </li>
                       
                   <li>
                   </li>
                 </ul>
               </li>
               
               <li class="nav__item nav__item--extra">
                 <h2 class="nav__title">מתקנים</h2>
                 
                 <ul class="nav__ul nav__ul--extra">
                   <li>
                     <Link to='/gym'>חדר כושר</Link>
                   </li>
                   
                   <li>
                     <Link to='/lessons'>שיעורים</Link>
                   </li>
                   
                   <li>
                     <Link to='/facilities'>מתקני המרכז</Link>
                   </li>
                   
                 </ul>
               </li>
               
               <li class="nav__item">
                 <h2 class="nav__title">מידע כללי</h2>
                 
                 <ul class="nav__ul">
                   <li>
                     <Link to='/staff'>הצוות</Link>
                   </li>
                   
                   <li>
                     <Link to='/about_us'>צרו קשר</Link>
                   </li>
                   
                   
                   <li>
                     <Link to='/about_us'>שעות פעילות</Link>
                   </li>
                 </ul>
               </li>
             </ul>
             
             <div style={{display:'flex',justifyContent:'center'}} class="legal">
               <p>&copy; Mount 10 כל הזכויות שמורות למרכז הספורט</p>
               
             </div>
           </footer>
        </div>
    );
};

export default Footer;