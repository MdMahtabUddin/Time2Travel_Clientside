import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobileAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import MyForm from '../MyForm/MyForm';

const ContactUs = () => {


    return (
        <div className="container my-5" id="contactUs">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="d-flex flex-column page-title-container justify-content-center align-items-center" >
                    <div className="text-center mb-3" data-aos="fade-down">
                        <h2 className="fw-bold page-title fs-1">NEED ADVENTURE ADVICE?</h2>
                        <p>Please feel free to contact us. We will get back to you as soon as possible.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row gy-5">
                        <div className="col-md-6">
                            <div className="text-dark">
                                <h3>The BootCamp Adventure Ltd.</h3>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 01952-777999</p>
                                <p><FontAwesomeIcon icon={faMobileAlt} /> 0777 909 6223</p>
                                <p><FontAwesomeIcon icon={faFax} /> 0208 390 6311</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> E-Mail: info@thebasecampbd.com</p>
                                <hr />
                            </div>

                            <div className="">
                                <h5>BootCamp</h5>
                                <GoogleMaps></GoogleMaps>
                            </div>
                        </div>

                        <div className="col-md-6">
                            {/* <h3>LifeSpring Psychiatric Clinic</h3> */}
                            <h4>Send a Message</h4>

                            <div className="bg-light p-3">
                                <MyForm></MyForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;