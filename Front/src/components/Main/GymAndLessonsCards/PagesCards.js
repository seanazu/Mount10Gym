import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHead,CardImageGym,CardImageBasketball, CardBody, CardHeadline, CardText, CardFoot, CardBorder, CardGrid,CardButton} from '../../../Elements/Main/CardElements';
import GymImage from '../../../Images And Logos/GymPng/GymImage.JPG'
import LessonsImage from '../../../Images And Logos/LessonsPng/CardHeader.jpg'




const PagesCards = () => {
    return (
		<CardGrid>
            <Card >
	            <CardHead>
	            	<CardImageGym style={{backgroundImage:`url(${GymImage})`}}></CardImageGym>
	            </CardHead>
	            <CardBody>
	            	<CardHeadline>חדר כושר</CardHeadline>
	            	<CardText>
				    	חדר הכושר החדש בהר אדר נבנה ועוצב ברמה המתקדמת ביותר בעולם, תוך התייחסות מרבית לצורכי המתאמנים

						<span>.</span>
					</CardText>
	            </CardBody>
	        	<br/>
	        	<br/>
	        	<br/>
	        	<br/>
	            <CardFoot>
					<CardButton color='inherit' variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to='/gym'>קרא עוד</Link></CardButton>
	            </CardFoot>
	            <CardBorder></CardBorder>
            </Card >
            <span style={{width:'20px'}}></span>
            <Card >
	            <CardHead>
	            	<CardImageBasketball style={{backgroundImage:`url(${LessonsImage})`}}></CardImageBasketball>
	            </CardHead>
	            <CardBody>
	            	<CardHeadline> שיעורי סטודיו</CardHeadline>
	            	<CardText>
			     		למרכז יש שתי חדרי סטודיו גדולים ומרווחים עם עיצוב ייחודי ומגוון רחב של ציוד מקצועי ואיכותי
						 <span>.</span>
                        האולמות והמדריכים עומדים בקריטריונים גבוהים
                        <span>.</span>
					</CardText>
	            </CardBody>
	        	<br/>
	        	<br/>
	        	<br/>
	        	<br/>
	            <CardFoot>
				<CardButton color='inherit' variant="outlined"><Link style={{textDecoration:'none',color:'black'}} to='/lessons'>קרא עוד</Link></CardButton>
	            </CardFoot>
	            <CardBorder></CardBorder>
            </Card >
	</CardGrid>
    );
};

export default PagesCards;