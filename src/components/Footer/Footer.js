import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div>
            <footer className="">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3>Time 2 Travel</h3>
                                    <p className="mb-4 mt-4">
                                        R-2 Chanmia Housing Mohammadpur, Dhaka Division, Bangladesh                                    </p>
                                    <p><strong>Phone:</strong> 0171737**** (10AM-5PM)</p>
                                    <p><strong>Email:</strong> info@time2travel.com</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Home</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">About us</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Tour Guide</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4>Our Packages</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Sundarban</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Cox's Bazar</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Sajek</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Rangamati</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">And More...</HashLink></li>
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
                                    Copyright &copy; <span id="currentYear"></span> Mahtab Uddin | Site designed by <a
                                        href="" target="_blank" rel="noreferrer" title="Mahtab 45">
                                        <span className="text-white"  >Mahtab 45</span></a>
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