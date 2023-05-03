import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <div className='min-h-[calc(100vh-136px)]'> <Outlet></Outlet></div>
        </div>
    );
};

export default Home;