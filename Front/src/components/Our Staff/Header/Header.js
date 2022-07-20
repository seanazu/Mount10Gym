import React from 'react';
import { HeaderDiv,Sides,Info,HeaderText } from "../../../Elements/Our Staff/Header";

const Header = () => {
    return (
        <div>
            <HeaderDiv>
              <Sides>
              </Sides>
              <Info>
                <HeaderText >THE <span style={{color:'#fb4f14'}}>TEAM</span></HeaderText>

              </Info>
            </HeaderDiv>
        </div>
    );
};

export default Header;