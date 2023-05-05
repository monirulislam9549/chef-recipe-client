import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import Slider from '../ExtraSection/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Slider></Slider>
            {/* <Outlet></Outlet> */}
            {/* <div className='min-h-[calc(100vh-100px)]'> </div> */}
        </div>
    );
};

export default Home;