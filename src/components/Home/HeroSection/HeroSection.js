import React from 'react';
import './HeroSection.css';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';

// import Typist from 'react-typist';
// import { NavLink } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Carousel, Dropdown } from 'react-bootstrap';


const HeroSection = () => {
    return (
        <div >
      <Carousel fade className="">
        <Carousel.Item>
          <img className="d-block h-50 " src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>Amazing Tour Hampishire</h1>
            <p> 7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-50" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Amazing Tour in Indonesia</h1>
            <p>7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h1>Amazing Tour in Madagascar</h1>
            <p>7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="find-form">
       
      </div>
    </div>
    );
};

export default HeroSection;