import React from 'react';
import AllPackage from '../AllPackage/AllPackage';
import HeroSection from '../HeroSection/HeroSection';
import TourGuide from '../TourGuide/TourGuide';
import './Home.css';
import AboutUs from '../AboutUs/AboutUs'
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TourGuide></TourGuide>
            <AllPackage></AllPackage>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;