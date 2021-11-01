import React from 'react';

import MyForm from './MyForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMobileAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Appointment = () => {
    return (
        <div className="container-fluid p-0">
            
                <div className="text-center" data-aos="fade-down">
                    <h2 className="fw-bold page-title fs-1">Appointment</h2>
                    <p>Please feel free to contact us. We will get back to you as soon as possible.</p>
                </div>
            

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="text-dark">
                            <h3>Life & Care Hospital</h3>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> 0844 9955 123</p>
                            <p><FontAwesomeIcon icon={faMobileAlt} /> 0777 909 6223</p>
                            <p><FontAwesomeIcon icon={faFax} /> 0208 390 6311</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> E-Mail: test@example.com</p>
                            <hr />
                        </div>

                        
                    </div>

                    <div className="col-md-6">
                        <h3>Life & Care Hospital</h3>
                        <h4>Send a Message</h4>

                        <div>
                            <MyForm></MyForm>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Appointment;