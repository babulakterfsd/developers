import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

//navbar and banner both comments are rendering from here
const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;