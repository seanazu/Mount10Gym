import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SpinningUpper from '../../../Images And Logos/Basketball-Tenis/GridGallery/SpinningUpper.JPG'
import SpinningDown from '../../../Images And Logos/Basketball-Tenis/GridGallery/SpinningDown.JPG'
import BasketballGame from '../../../Images And Logos/Basketball-Tenis/GridGallery/BasketballGame.JPG'
import BaskeballCourt from '../../../Images And Logos/Basketball-Tenis/GridGallery/BasketballCourt.JPG'
import { GalleryBorder } from '../../../Elements/CenterFacilities/Gallery';

const GridGallery = () => {

    return (
		<GalleryBorder>
		<Carousel>
	    	<div>
	    		<img src={BaskeballCourt} />
	    	</div>
	    	<div>
	    		<img src={SpinningUpper} />
	    	</div>
	    	<div>
	    		<img src={SpinningDown}/>
	    	</div>
	    	<div>
	    		<img src={BasketballGame}/>
	    	</div>
	    </Carousel>
		</GalleryBorder>
    );
};

export default GridGallery;