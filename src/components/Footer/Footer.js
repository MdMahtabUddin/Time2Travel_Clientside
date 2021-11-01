import React from 'react';
import './Footer.css';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer className="mt-5">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3>Life & Care Hospital</h3>
                                    <p className="mb-4 mt-4">
                                        43/c R-2 , Mohammadpur , Dhaka Bangladesh
                                    </p>
                                    <p><strong>Phone:</strong> 09638-505505 (24*7)</p>
                                    <p><strong>Email:</strong> help@lifecare.com</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Home</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">About us</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Services</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <Link as={HashLink} to="/home#our-services">Baby Care</Link></li>
                                    <li><i className="fas fa-check"></i> <Link as={HashLink} to="/home#our-services">X-Ray</Link></li>
                                    <li><i className="fas fa-check"></i> <Link as={HashLink} to="/home#our-services">Cardiology</Link></li>
                                    <li><i className="fas fa-check"></i> <Link as={HashLink} to="/home#our-services">Covid19</Link></li>
                                    <li><i className="fas fa-check"></i> <Link as={HashLink} to="/home#our-services">And More...</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Subscribe to our newsletter to receive latest updates</p>
                                <form action="" method=""><input type="email" name="email" /><input type="submit" value="Subscribe" /></form>

                                <div className="social-links mt-3">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p >
                                    Copyright &copy; <span id="currentYear"></span> Mahtab @45 | Site designed by <a
                                        href="git" target="_blank" rel="noreferrer" title="">
                                        <span className="text-white"  >Mahtab @45</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;