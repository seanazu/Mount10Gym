import React from 'react';
import { BlogCard,Thumbnail,LeftImage,CardContent,ContentHead,Seperator,CardParagraph,DateDay,DateMonth,ArticleButton, CardBox, ArrowIcon } from '../../Elements/Articles/Articles';
import {Link} from 'react-router-dom'


const ArticleCard = () => {
    return (
        <CardBox>
                <BlogCard>
                     <Thumbnail>
                         <LeftImage src="http://cdn.shopify.com/s/files/1/2978/6072/articles/Fail-proof_Bulking_Meal_Plan_for_Muscle_Building_MealPlanMagic_Meal_Plan_Software_Template_Prep_1200x1200.jpg?v=1524677135" />
                     </Thumbnail>
                          <CardContent>
                              <ContentHead>
                               לדעת מתי ומה לאכול יכול לעשות את ההבדל באימונים שלך. להבין את הקשר בין אכילה לפעילות גופנית 
                               </ContentHead>
                              <Seperator></Seperator>
                              <CardParagraph>

                              אכילה ופעילות גופנית הולכים יד ביד. מתי ומה אתה אוכל יכול להיות חשוב להרגשה שלך כשאתה מתאמן, בין אם זה אימון מזדמן או אימון לתחרות. שקול את העצות הללו לאכילה ופעילות גופנית.
                              </CardParagraph>
                              
                          </CardContent>
                          <DateDay>2021</DateDay>
                          <DateMonth>October</DateMonth>
                          <br/>
                          <br/>
                          <Link to='/articlepage'><ArticleButton><ArrowIcon /></ArticleButton> </Link>
                </BlogCard>

                <BlogCard>
                     <Thumbnail>
                         <LeftImage src="http://cdn.shopify.com/s/files/1/2978/6072/articles/Fail-proof_Bulking_Meal_Plan_for_Muscle_Building_MealPlanMagic_Meal_Plan_Software_Template_Prep_1200x1200.jpg?v=1524677135" />
                     </Thumbnail>
                          <CardContent>
                              <ContentHead>אילו מאכלים מומלץ לאכול בשביל לעלות במסת שריר </ContentHead>
                              <Seperator></Seperator>
                              <CardParagraph>ביקרת במכון הכושר השכונתי, ראית את הגורילות המקומיות המרתיעות משהו, את המכשירים הלא מזוהים, ואפילו המושגים ששמעת שנזרקו שם לאוויר לא ברורים לך. כבר הרבה זמן שרצית לקחת את עצמך בידיים ולהתחיל לעבוד על הגוף שלך, לתת קצת נפח לידיים, לעגל את הכתפיים ולהתחיל להראות קצת יותר מסיבי.
                                 לא להישאר תקוע ולדרוך באותה נקודה בלי סוף.   
                                 </CardParagraph>
                          </CardContent>
                          <DateDay>2021</DateDay>
                          <DateMonth>November</DateMonth>
                          <br/>
                          <br/>
                          <Link to='/articlepage'><ArticleButton><ArrowIcon /></ArticleButton></Link>
                </BlogCard>

        </CardBox>
    );
};

export default ArticleCard;