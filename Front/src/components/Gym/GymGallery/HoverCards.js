import React from 'react';
import './../../../Styles/GymGallery.css'
import CrossfitImage from '../../../Images And Logos/GymPng/Crossfit.JPG'
import RunningImage from '../../../Images And Logos/GymPng/Running.jpg'
import MachinaryImage from '../../../Images And Logos/GymPng/Machines_.jpg'

const GymGallery = () => {
    return (
        <div>
            <div className="demo-description">
            </div>
            <div className="demo coursemeal">
                <div className="coursemeal__div "> 
                    <picture className="responsive-img">
                        <source srcSet={MachinaryImage}/>
                        <source srcSet={MachinaryImage}/>
                        <img  alt="Appetizer" />
                    </picture>     
                    <div className="coursemeal-info">
                        <a href="#" className="coursemeal-info__link">מכשירים</a>
                    </div>
                </div>

                <div className="coursemeal__div">
                    
                    <picture className="responsive-img">
                        <source  src={RunningImage}/>
                        <source srcSet={RunningImage} />
                        <img src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg" alt="Main Course" />
                    </picture> 

                    <div className="coursemeal-info">
                        <a href="#" className="coursemeal-info__link">ריצה</a>
                    </div>            
                </div>

                <div className="coursemeal__div">
                    
                    <picture className="responsive-img">
                        <source src={CrossfitImage} />
                        <source  srcSet={CrossfitImage}/>
                        <img  alt="Desserts"/>
                    </picture>

                    <div className="coursemeal-info">
                        <a href="#" className="coursemeal-info__link">קרוספיט</a>
                    </div>              
                </div>


            </div>
        </div>
    );
};

export default GymGallery;