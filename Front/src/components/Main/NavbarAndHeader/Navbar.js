import React, { useState } from 'react';
import {Nav, NavLink, Bars, NavMenu, Logo, NavUserLink}
from '../../../Elements/Main/NavbarAndHeaderElements';
import logo from '../../../Images And Logos/Logo/mount10Logo.png'
import SideMenu from '../SideMenu/SideMenu';

const Navbar = (props) => {
  const[clicked, setClicked]=useState(false)
  const[sideMenuDisplay,setSideMenuDisplay] = useState('none');
  

  const sideMenu = ()=>{
    let newClickedStatus ;
    if(clicked == false){
      newClickedStatus = !clicked
      setClicked(newClickedStatus);
      setSideMenuDisplay('block')
    }else if(clicked == true){
      newClickedStatus = !clicked;
      setClicked(newClickedStatus);
      setSideMenuDisplay('none')
    }
  }

  return (
    <div>
         <Nav>
        <NavLink to='/'>
        <Logo src={logo} alt='logo' />
        </NavLink>
        <SideMenu display={sideMenuDisplay}/>
        <Bars onClick={sideMenu}/>
        <NavMenu>
          <NavLink to='/about_us' activeStyle>
            צור קשר  
          </NavLink>
          <NavLink to='/staff' activeStyle>
            הצוות  
          </NavLink>
          <NavLink to='/facilities' activeStyle >
             מתקני המרכז
          </NavLink>
          <NavLink to='/gym' activeStyle >
            חדר כושר
          </NavLink>
          <NavLink to='/lessons' activeStyle>
            שיעורים
          </NavLink>
          <NavLink to='/serverCheck' activeStyle>
            שיעורים
          </NavLink>
          <NavUserLink to='/login' activeStyle>
             כניסה
          </NavUserLink>
          
        </NavMenu>
      </Nav>

    </div>
  );
};

export default Navbar;