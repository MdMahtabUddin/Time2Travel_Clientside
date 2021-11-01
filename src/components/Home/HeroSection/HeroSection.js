import React from 'react';
import './HeroSection.css';
import doctors from '../../../images/doctors.png';

import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const HeroSection = () => {
    return (
        <section className="hero" >
        <div className="container hero-section py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 lh-lg " data-aos="fade-right">
                    <small className="fw-light text-secondary"></small>
                    
                       <h1> Welcome to <br /> <span className="hero-title" >Life and Care Hospital</span></h1>
                    
                    <p className="text-secondary">
                        <small>
                            <Typist className="typist" >
                            “I wanted to send these blessings to all of you working the front line and keeping our friends and family safe & comfortable in your care! You are truly God's blessings.” Judith
<br />
“Real heroes wear masks below their eyes.” Larry
<br />
“Praying for protection for all of the doctors and nurses right now.” Dianna
                            </Typist>

                        </small>
                    </p>
                    <NavLink to="/about">
                        <button className="btn custom-green-btn">
                            Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </NavLink>

                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <div>
                        <img className="img-fluid w-50 " src={doctors} alt="" />
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
};

export default HeroSection;