import React from 'react';



import AllServices from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';
import AboutUs from '../../AboutUs/AboutUs'
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
           
           
            <AllServices></AllServices>
            <TourGuide></TourGuide>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;