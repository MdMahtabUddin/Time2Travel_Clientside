import React from 'react';
import AllPackage from '../AllPackage/AllPackage';
import ContactUs from '../ContactUs/ContactUs/ContactUs';
import HeroSection from '../HeroSection/HeroSection';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Reviews from '../Reviews/Reviews';
import './Home.css';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AllPackage></AllPackage>
            <Reviews></Reviews>
            <PhotoGallery></PhotoGallery>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;