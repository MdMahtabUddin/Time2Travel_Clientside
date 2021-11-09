import React from 'react';
import './HeroSection.css';
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';
import slider4 from '../../../images/slider/slider4.jpg';
import slider5 from '../../../images/slider/slider5.jpg';
import slider6 from '../../../images/slider/slider6.jpeg';


const HeroSection = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item  active">
                    <img src={slider6} className="d-block w-100" alt="..." />
                    <div className=" carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">SUNDARBAN</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">SYLHET(LALAKHAL)</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={slider3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">RANGAMATI</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={slider4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">SAJEK</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={slider5} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">COX'S BAZAR</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={slider1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        
                        <div>
                            <p className="font-monospace">WHERE YOUR ADVENTURES BEGIN</p>
                            <h1 className="font-monospace display-1">BANDARBAN</h1>
                        </div>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroSection;