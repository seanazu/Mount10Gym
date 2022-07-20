import React, { useEffect, useState } from 'react';
import {SideMenuDiv,MenuTextBox, PageLink, PageLinkBox, ExitMenuButton} from '../../../Elements/Main/SideMenu'


const SideMenu = (props) => {
    const[display,setDisplay] = useState('none');


    useEffect(()=>{
        setDisplay('block');
    },[props.display])

    useEffect(()=>{
        setDisplay('none');
    },[])

    const closeSideMenu = () =>{
        setDisplay('none')
    }

    return (
        <div>
            <SideMenuDiv style={{display:display}}>
                
                <MenuTextBox>
                    <PageLinkBox>
                        <PageLink to='/' onClick={closeSideMenu}>
                             בית 
                        </PageLink>
                    </PageLinkBox>
                    <PageLinkBox>
                        <PageLink to='/lessons' onClick={closeSideMenu}>
                             שיעורים 
                        </PageLink>
                    </PageLinkBox>
                    <PageLinkBox>
                        <PageLink to='/gym' onClick={closeSideMenu}>
                             חדר כושר 
                        </PageLink>
                    </PageLinkBox>
                    <PageLinkBox>
                        <PageLink to='/facilities' onClick={closeSideMenu}>
                             מתקני המרכז 
                        </PageLink>
                    </PageLinkBox>
                    <PageLinkBox>
                        <PageLink to='/staff' onClick={closeSideMenu}>
                             הצוות 
                        </PageLink>
                    </PageLinkBox>
                    <PageLinkBox>
                        <PageLink to='/about_us' onClick={closeSideMenu}>
                             עלינו 
                        </PageLink>
                    </PageLinkBox>
                </MenuTextBox>
                <ExitMenuButton onClick={closeSideMenu} >Hello</ExitMenuButton>
            </SideMenuDiv>
        </div>
    );
};

export default SideMenu;