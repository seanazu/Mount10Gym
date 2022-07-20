import React from 'react';
import { Box,Content,ContentHeader } from '../../../Elements/Gym/GymHoursCard';

const GymHoursCard = () => {
    return (
        <div>
                 <Box>
                   <Content>
                     <ContentHeader>שעות פעילות </ContentHeader>
                     <br/>
                     <p ><a>
                       יום ראשון - 12:00-20:00
                       <br/>
                       יום שני - 12:00-20:00
                       <br/>
                       יום שלישי - 12:00-20:00
                       <br/>
                       יום רביעי - 12:00-20:00
                       <br/>
                       <br/>
                       ........לפרטים ניתן להתקשר ל
                       </a>
                      </p>
                   </Content>
                 </Box>
        </div>
    );
};

export default GymHoursCard;