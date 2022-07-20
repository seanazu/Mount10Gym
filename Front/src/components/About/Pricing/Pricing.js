import React from 'react';
import '../../../Styles/Pricing.css'
import FitnessIcon from '@mui/icons-material/FitnessCenter';
import LessonIcon from '@mui/icons-material/SelfImprovement';
import PersonalTraining from '../../../Images And Logos/LessonsPng/personal-training.png'

const Pricing = () => {
    return (
        <div className='pricingBody'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                <div class="pricing-table">
                    <div class="pricing-option" >
                        <FitnessIcon style={{color:'white', fontSize:'45px'}}/>
                        <br/>
                        <h1>מנוי חודשי </h1>
                        <p>מחיר : 260 </p>
                        <hr />
                        <div>
                            <p>מנוי סטנדרטי חודשי כולל - כניסה חופשית לחדר כושר ולכלל שיעורי הסטודיו.</p>
                        </div>
                        <hr />
                        <div class="price">
                            <div class="back">
                              <a href='tel:052-8333614' class="button">התקשרו אלינו</a>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-option">
                        <LessonIcon style={{color:'white', fontSize:'45px'}}/>
                        <br/>
                        <h1>מנוי סטודיו</h1>
                        <p>מחיר : 200 </p>
                        <hr />
                        <div>
                            <p>מנוי סטודיו כולל כניסה חופשית לכלל השיעורים ללא הגבלה. </p>
                        </div>
                        <hr />
                        <div class="price">
                            <div class="back">
                               <a href='tel:052-8333614' class="button">התקשרו אלינו</a>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-option">
                        <img src={PersonalTraining} style={{color:'white', height:'45px'}}/>
                        <br/>
                        <h1>כרטיסיית שיעורים</h1>
                        <p>מחיר : 525 </p>
                        <hr />
                        <div>
                            <p> לאלו שאינם רוצים להיות מחוייבים לתקופה ניתן לקנות כרטיסייה של 15 שיעורים.</p>
                        </div>
                        <hr />
                        <div class="price">
                            <div class="back">
                              <a href='tel:052-8333614' class="button">התקשרו אלינו</a>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Pricing;