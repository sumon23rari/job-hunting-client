import React from 'react';
import Navbar from '../components/Shared/Header/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('logIn') || location.pathname.includes('register')
    return (
        <div>
           {noHeaderFooter|| <Navbar></Navbar>}
           <div className='max-w-[1180px] mx-auto min-h-screen'>
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;