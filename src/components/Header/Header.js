import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';



const Header = () => {

    const { user, logout } = useAuth()


    const { photoURL, displayName } = user;


    return (
        <div className="sticky-top">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                <h5>Life & Care Hospital</h5>
                    <Link to="/home">
                        
                    </Link>
                    {/* <HashLink to="/home#ourservices">Link to Hash Fragment</HashLink> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="  collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav fw-bold">
                            
                        </ul>
                        <ul className=" d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
                            
                        <li className="nav-item cool-link">
                                <Link to="/" className="nav-link">HOME</Link>
                            </li>
                            <li className="nav-item cool-link">
                                {/* <HashLink as={HashLink} to="/home#ourservices" className="nav-link">SERVICES</HashLink> */}
                                <Link to="/service" className="nav-link">SERVICES</Link>
                            </li>
                            
                            <li className="nav-item cool-link">
                                <Link to="/our-team" className="nav-link">OUR TEAM</Link>
                            </li>
                            <li className="nav-item cool-link">
                                <Link to="/appointment" className="nav-link">
                                     APPOINTMENT
                                </Link>
                            </li>
                            <li className="nav-item cool-link">
                                <Link to="/about" className="nav-link">ABOUT US</Link>
                            </li>
                            
                            
                            
                            
                            
                            <li className="nav-item fw-bold">
                                <span>
                                    {user.email ?

                                        <>
                                            <img className="user-image rounded-circle" src={photoURL} alt="" height={50} />
                                            <span className="pe-5 ps-2">{displayName}</span>
                                        </>

                                        :
                                        <></>
                                    }
                                </span>

                                {
                                    user.email ?
                                        <button className="btn btn-outline-secondary" onClick={logout}>
                                            <i className="fas fa-sign-out-alt"></i> LOGOUT
                                        </button>
                                        :
                                        <Link to="/login" className="nav-link cool-link">LOGIN</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;