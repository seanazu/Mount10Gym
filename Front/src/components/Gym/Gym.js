import React, { useEffect } from 'react';
import { Header as PageHeader, TextBox,HeadingPrimary,HeadingPrimaryMain, HeadingPrimarySub} from '../../Elements/Gym/GymElements';
import GymGallery from './GymGallery/HoverCards';
import ModernGym from './PictureAndText/ModernGym';
import PersonalTraining from './PictureAndText/PersonalTraining';
import GridGallery from './GymGallery/GridGallery';
import GymInformationCard from './GymPricing/GymInformationCard';
import { PageContent } from '../../Elements/Main/NavbarAndHeaderElements';
import { useDispatch, useSelector } from 'react-redux';



const Gym = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []) 


    return (
        <div>
           <PageContent>
           <PageHeader
            style={{
            backgroundImage: `url(${'http://localhost:8080/images/8ca293a7467030cdda025fe937336809'})`}} >
           </PageHeader>
           <TextBox>
                <HeadingPrimary>
                	<HeadingPrimaryMain>חדר הכושר</HeadingPrimaryMain>
                	<HeadingPrimarySub >ציוד חדש ואיכותי</HeadingPrimarySub>
                </HeadingPrimary>
            </TextBox>
            <ModernGym/>
            </PageContent>
            <GymInformationCard/>
            <PageContent>
            <PersonalTraining />
            </PageContent>
            <GymGallery/>
            <GridGallery/>

        </div>
    );
};

export default Gym;