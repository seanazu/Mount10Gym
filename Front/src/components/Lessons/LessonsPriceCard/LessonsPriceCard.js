import React from 'react';
import { LessonsScrollmageBar } from '../../../Elements/Lessons/Lessons';
import Pricing from '../../About/Pricing/Pricing';

const LessonsPriceCard = () => {
    return (
        <div>
           <LessonsScrollmageBar>
              <Pricing/>
              <br/>
          </LessonsScrollmageBar>
        </div>
    );
};

export default LessonsPriceCard;