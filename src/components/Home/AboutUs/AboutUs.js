import React from 'react';
import travel from '../../../images/travel.gif'
const AboutUS = () => {
    return (
        <div>
        <div className="banner-container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6">
              <img className="w-100 " src={travel} alt="" />
            </div>
            <div className="col-md-6 p-5">
              <h1 className="my-5 text-success">About Us</h1>
              <p>
                About Us! Time 2 Travel was established in 2021.
                It is one of the best travel agency at Dhaka City.
                <br />
                We believe that any person in need of tour help comes to a  with high
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

export default AboutUS;