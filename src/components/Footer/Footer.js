import React from 'react';
import './Footer.css';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer mt-5">
        <div className="container pt-4 footer-flex">
             <div className="pt-5">
                 <h1 className="brand-title">Travel Dairy<sup>BD.</sup></h1>
                  <p className="brand-short">A Group by TravelTech.</p>
                  <br/>
                  <p>
                  Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Aliquid maxime aut ut <br/>voluptate dolorum nisi ducimus ratione
                  </p>
                  <h3 className="mt-5">Follow Us:</h3>
                  <div className="d-flex mt-4">
                          <i className="fab fa-facebook-square icon"></i>
                          <i className="fab fa-twitter-square icon ps-3"></i>
                          <i className="fab fa-instagram-square icon ps-3"></i>
                          <i class="fab fa-youtube-square icon ps-3"></i>
                  </div>
             </div>
             <div className="pt-5">
                 <h3 className="mt-4">Contact Us:</h3>
                 <div className="d-flex mt-5">
                    <i class="fas fa-phone-alt icon-p pt-3 pe-3"></i>
                     <div>
                         <p>+64329824100</p>
                         <p className="padding">+92563913442</p>
                     </div>
                 </div>
                 <div className="d-flex mt-3">
                 <i class="fas fa-envelope-open-text icon-p pt-3 pe-3"></i>
                     <div>
                         <p>info@gmail.com</p>
                         <p className="padding">traveldairy@gmail.com</p>
                     </div>
                 </div>
                 <div className="d-flex mt-3">
                 <i class="fas fa-map-marker-alt icon-p pt-3 pe-3"></i>
                     <div>
                         <p>2752 Willison Street</p>
                         <p className="padding">Eagan, United State</p>
                     </div>
                 </div>
             </div>



             <div className="pt-5">
             <h3 className="mt-4">Contact Us:</h3>
                 <div className="d-flex mt-5">
                    <p>Contact Us</p>
                   
                 </div>
                 <div className="d-flex mt-3">
                    <p>About Us</p>
                    
                 </div>
                 <div className="d-flex mt-3">
                     <p>Destinations</p>
                   
                 </div>
                 <div className="d-flex mt-3">
                     <p>Support</p>
                   
                 </div>
             </div>
             <div className="pt-5">
                 <h3 className="pt-4">We Accpets:</h3>
                 <div className="d-flex">
                       <i class="fab fa-cc-visa payment"></i>
                       <i class="fab fa-cc-paypal payment ps-2"></i>
                 </div>
                 <div className="d-flex mt-3">
                      <i class="fab fa-cc-amazon-pay payment"></i>    
                      <i class="fab fa-cc-discover payment ps-2"></i>
                 </div>
                 
             </div>
        </div>
     </div>
    );
};

export default Footer;