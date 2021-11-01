import React from 'react';
import './AboutUs.css';

import womenAboutUsImg from '../../images/women-about-us.jpg';



const AboutUs = () => {



    return (
        <div>
        <div className="banner-container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6">
              <img className="w-100 m-2" src={womenAboutUsImg} alt="" />
            </div>
            <div className="col-md-6 p-5">
              <h1 className="my-5 text-success">About Us</h1>
              <p>
                About Us! Life & Care Hospital was established in 2021.
                It is one of the speciality and superspeciality hospital which
                extends medical care to patient in a very friendly and homely
                environment.
                <br />
                We at Royal Multispeciality Hospital believe that any person in
                need of medical help comes to a doctor/hospital with high
                expectations, hoping that he will be relieved of distress and
                treated with compassion and care.
              </p>
              <button className="btn btn-dark m-auto">Find out how</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;