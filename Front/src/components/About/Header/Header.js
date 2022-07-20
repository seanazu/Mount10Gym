import React from 'react';
import { HeaderDiv,Sides,Info, HeaderText } from "../../../Elements/Our Staff/Header";


const Header = () => {
    return (
        <div>
            <HeaderDiv>
              <Sides>
              </Sides>
              <Info>
                <HeaderText >ABOUT <span style={{color:'#fb4f14'}}>US</span></HeaderText>

              </Info>
            </HeaderDiv>
        </div>
    );
};

export default Header;