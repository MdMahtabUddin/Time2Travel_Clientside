import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NoDataAvilable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import HeadShake from 'react-reveal/HeadShake';



const NoDataAvailable = () => {

    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="text-center no-data-available-section mb-5">
                    <HeadShake>
                        <h4 className="py-5">
                            You do not booked any of our packages yet!
                        </h4>
                    </HeadShake>
                    <HashLink as={HashLink} to="/home#allPackages" className="btn custom-btn-style">
                        View our Packages <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </HashLink>

                </div>
            </div>
        </div>
    );
};

export default NoDataAvailable;