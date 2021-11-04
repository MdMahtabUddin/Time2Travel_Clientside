import React from 'react';



import AllServices from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';
import AboutUs from '../../AboutUs/AboutUs'
import TourGuide from '../TourGuide/TourGuide';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
           <AboutUs></AboutUs>
           
            <AllServices></AllServices>
            <TourGuide></TourGuide>
            
            
        </div>
    );
};

export default Home;