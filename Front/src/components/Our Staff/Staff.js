import React, { useEffect } from 'react';
import StaffCards from './StaffCards/Staff'
import Header from './Header/Header'

const Staff = () => {
        
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <StaffCards/>
        </div>
    );
};

export default Staff;