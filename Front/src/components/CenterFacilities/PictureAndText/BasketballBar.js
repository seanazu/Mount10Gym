import React from 'react';
import { Content, Divider, Header, HeaderOrangeText, OuterDiv, SidePngBasketball, TextBox } from '../../../Elements/Gym/PictureAndText';
import BasketballPlayers from '../../../Images And Logos/Basketball-Tenis/Basketball.png'

const BasketballBar = () => {
    return (
        <div>
            <OuterDiv>
            	<TextBox>
            		<Content >
                       <Header>אולם כדורסל<br/><HeaderOrangeText > מצויד ורב תכליתי </HeaderOrangeText></Header>
                       <br/>

                        האולם מכיל 500 מושבים. נבנה בשנת 2013 נחנך בשנת 2014
                        הגודל אפשר לקחת מהתיק במחלקת הנדסה .

                        באולם ישנם חוגים לכל גיל ומגוון פעילויות ספורטיביות בהן ניתן להשתתף.
                 
                        ישנן קבוצות מכל גיל המתאמנות ומתחרות באולם. אליהן יהיה ניתן להירשם דרך המשרד.
                        <br/>  
                        <br/>
                         יש מחיצה לחלוקת המגרש ל-2 להופעות של עד 250 איש.
                         יכול לשמש למגוון תחרויות ספורט, ג’ודו טקוונדו ועוד
                         גם כאולם להופעות ואירועים בחלל סגור עד 500 איש
                         ניתן לבנות במה להופעות באולם.

                         </Content>    
            	</TextBox>
                <Divider></Divider>
            	<SidePngBasketball  style={{backgroundImage:`url(${BasketballPlayers})`}}></SidePngBasketball>
            </OuterDiv>
        </div>
    );
};

export default BasketballBar;