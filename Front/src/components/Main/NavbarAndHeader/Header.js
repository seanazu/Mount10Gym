import React from 'react';
import { HeaderDiv, Sides, Info ,HeaderText,SubHeaderText} from '../../../Elements/Main/NavbarAndHeaderElements';

const Header = () => {
    return (
        <div>
              <HeaderDiv>
              <Sides>
              </Sides>
              <Info>
                <HeaderText>MOUNT<span style={{color:'#fb4f14',fontWeight:'600'}}>10</span></HeaderText>
                <br/>
                <SubHeaderText><span style={{color:'#fb4f14',fontWeight:'700'}}>FITNESS</span>CENTER</SubHeaderText>
              </Info>
            </HeaderDiv>
        </div>
    );
};

export default Header;