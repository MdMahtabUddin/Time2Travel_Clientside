import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import logo from '../../images/logo.png'
import useAuth from '../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLocationArrow, faListUl, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const { user, logout, allBooking, myBooking } = useAuth()
    const { photoURL, displayName, email } = user;

    // console.log('totalBooking', totalBooking);

    // const [allBooking, setAllBooking] = useState([])

    // useEffect(() => {
    //     try {
    //         async function callApi() {
    //             let results = await fetch('https://nameless-retreat-42432.herokuapp.com/allBooking');
    //             results = await results.json();
    //             setAllBooking(results);
    //         }
    //         callApi();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [allBooking])




    // const [myBooking, setMyBooking] = useState([])

    // useEffect(() => {
    //     try {
    //         async function callApi() {
    //             let results = await fetch(`https://nameless-retreat-42432.herokuapp.com/myBooking?email=${email}`);
    //             results = await results.json();
    //             setMyBooking(results);
    //         }
    //         callApi();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [myBooking])

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fw-bold text-uppercase">
                <div className="container">
                    <Link to={''} className="navbar-brand">
                        <div>
                            {/* <img src={logo} alt="" style={{ height: '80px' }} /> */}
                            <h3>Time 2 Travel </h3>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item cool-link">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item cool-link">
                                <HashLink as={HashLink} to="/home#allPackages" className="nav-link">Packages</HashLink>
                            </li>
                            {/* <li className="nav-item cool-link">
                                <HashLink as={HashLink} to="/home#photoGallery" className="nav-link">Gallery</HashLink>
                            </li> */}
                            {/* <li className="nav-item cool-link">
                                <HashLink as={HashLink} to="/home#contactUs" className="nav-link">Contact</HashLink>
                            </li> */}

                            {/* <li className="nav-item cool-link">
                                <HashLink as={HashLink} to="/home#reviews" className="nav-link">Reviews</HashLink>
                            </li> */}
                        </ul>

                        <ul className="d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
                            {user.email ?
                                <li className="nav-item dropdown ">
                                    <Link to="" className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>
                                            <>
                                                <img className="user-image rounded-circle " src={photoURL} alt="..." height={50} />
                                                <span className=" ps-2 ">{displayName}</span>
                                            </>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu w-100 border-0 shadow" aria-labelledby="navbarDropdown">
                                        <li className=" text-center">
                                            <div className="mx-2">
                                                <img className="user-image rounded-circle " src={photoURL} alt="..." height={80} />
                                            </div>
                                            <div>

                                            </div>
                                            <div className=" fw-light text-lowercase">
                                                <p>
                                                    <span className="text-capitalize">
                                                        {displayName}
                                                    </span>
                                                    <br />

                                                    <small className="text-secondary">
                                                        {email}
                                                    </small>

                                                </p>
                                            </div>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="nav-item menu-bg mt-4">
                                            <Link to="/myBooking" className="react-router-link">
                                                <button type="button" className="btn nav-link text-secondary fw-bold position-relative">
                                                    <FontAwesomeIcon icon={faLocationArrow} /> MY BOOKING
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        {myBooking?.length}
                                                    </span>
                                                </button>
                                            </Link>
                                        </li>

                                        <li className="nav-item menu-bg">
                                            <Link to="/addPackage" className="nav-link fw-bold">
                                                <FontAwesomeIcon icon={faPlus} /> Add Package
                                            </Link>
                                        </li>

                                        <li className="nav-item menu-bg">
                                            <Link to="/allBooking" className="react-router-link">
                                                <button className="btn nav-link text-secondary fw-bold position-relative">
                                                    <FontAwesomeIcon icon={faListUl} /> ALL BOOKING
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        {allBooking?.length}
                                                    </span>
                                                </button>
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="nav-item menu-bg fw-bold">

                                            <Link to="/" className="nav-link " onClick={logout}>
                                                {/* <button className="btn ms-3 btn-outline-secondary" onClick={logout}> */}
                                                <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                                                {/* </button> */}
                                            </Link>

                                            {/* <Link to="/login" className="nav-link cool-link">LOGIN</Link> */}

                                        </li>

                                    </ul>
                                </li>

                                :

                                <Link to="/login" className="nav-link cool-link">LOGIN</Link>


                            }



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;