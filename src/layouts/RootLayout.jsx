import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared pages/Navbar/Navbar';
import Footer from '../pages/shared pages/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;