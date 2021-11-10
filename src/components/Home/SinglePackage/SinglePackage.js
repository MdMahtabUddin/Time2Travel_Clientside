import React from 'react';
import './SinglePackage.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';
import Rating from 'react-rating';


const SinglePackage = (props) => {

    const { _id, name, serviceDetail, image,price, rating } = props.packageDetails;

    const url = `/packages/${_id}`;

    function randomNumber() {
        const min = 50;
        const max = 200;
        return Math.floor(Math.random() * (max - min) + min);
    }

    let randomRating = Math.floor(Math.random() * 5) + 1;
    // let randomReviewNumber = Math.floor(Math.random() * 10000) + 1;
    // let randomPerNightNumber = randomNumber();

    return (
        <div className="col">
            <Fade bottom>
                <Link to={url} className="react-hook-link">
                    <div className="card border-0 mb-5 package">
                        <div>
                            <img src={image} className="card-img-top packages-card-img" alt="..." />
                        </div>
                        {/* </Link> */}
                        <div className="card-body px-0">
                            <p className="card-title fw-bold">{name}</p>
                            <div>
                            <p>{serviceDetail} </p>
                            </div>
                            {/* <p className="card-text text-secondary font-weight-light">{details.slice(0, 180)}</p> */}
                            <div className="custom-khaki-color">
                                <Rating
                                    initialRating={randomRating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly
                                />
                                {/* <small className="text-secondary ms-2 fw-lighter">{randomReviewNumber}</small> */}
                            </div>
                            <p>
                                Price: {price}
                                <br/>
                                <button className="btn px-0">
                            <FontAwesomeIcon icon={faPlusCircle} />  Booked Now
                        </button>
                                {/* <small className="fw-bold text-dark">from ${randomPerNightNumber}/night</small> */}
                            </p>
                        </div>
                        {/* <Link to={url}> */}
                        
                    </div>
                </Link>
            </Fade>
        </div >
    );
};

export default SinglePackage;