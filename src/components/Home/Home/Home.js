import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import AllPackage from '../AllPackage/AllPackage';
import HeroSection from '../HeroSection/HeroSection';
import TourGuide from '../TourGuide/TourGuide';
import './Home.css';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TourGuide></TourGuide>
            <AllPackage></AllPackage>
            <AboutUS></AboutUS>
            
        </div>
    );
};

export default Home;