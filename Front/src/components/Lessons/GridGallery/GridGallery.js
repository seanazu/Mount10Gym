import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import YogaInstructor from '../../../Images And Logos/LessonsPng/CardHeader.jpg'
import Studio from '../../../Images And Logos/Basketball-Tenis/GridGallery/SpinningUpper.JPG'
import PilatesInstructor from '../../../Images And Logos/LessonsPng/YogaInstructor.JPG'
import SpinningDown from '../../../Images And Logos/Basketball-Tenis/GridGallery/SpinningDown.JPG'
import { GalleryBorder } from '../../../Elements/CenterFacilities/Gallery';


const GridGallery = () => {

    return (
		<GalleryBorder>
		<Carousel>
	    	<div>
	    		<img src={YogaInstructor} />
	    	</div>
	    	<div>
	    		<img src={Studio} />
	    	</div>
	    	<div>
	    		<img src={PilatesInstructor}/>
	    	</div>
	    	<div>
	    		<img src={SpinningDown}/>
	    	</div>
	    </Carousel>
		</GalleryBorder>
    );
};

export default GridGallery;