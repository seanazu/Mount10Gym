import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import DeadLift from '../../../Images And Logos/GymPng/GymGallery/DeadLift.JPG'
import WeightLifting from '../../../Images And Logos/GymPng/GymGallery/WeightLifting.JPG'
import MachineWork from '../../../Images And Logos/GymPng/GymGallery/MachineWork.JPG'
import CrossfitStudio from '../../../Images And Logos/GymPng/GymGallery/CrossfitStudio.JPG'
import {GalleryBorderGym } from '../../../Elements/CenterFacilities/Gallery';

const GridGallery = () => {
	

    return (
		<GalleryBorderGym>
		<Carousel>
	    	<div>
	    		<img src={DeadLift} />
	    	</div>
	    	<div>
	    		<img src={WeightLifting} />
	    	</div>
	    	<div>
	    		<img src={MachineWork}/>
	    	</div>
	    	<div>
	    		<img src={CrossfitStudio}/>
	    	</div>
	    </Carousel>
		</GalleryBorderGym>
    );
};

export default GridGallery;