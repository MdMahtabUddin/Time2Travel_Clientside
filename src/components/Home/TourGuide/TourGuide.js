import React from 'react';
import { Card } from 'react-bootstrap';
import './TourGuide.css';
import guide1 from '../../../images/guide/guide1.jpeg';
import guide2 from '../../../images/guide/guide2.jpeg';
import guide3 from '../../../images/guide/guide3.jpeg';
import guide4 from '../../../images/guide/guide4.jpeg';

const TourGuide = () => {
    return (
        <div>
            <div className="container">
            <div className="about-title2 mt-5">
                         
                         <h2 className="top-title text-center">All Guide Are <br/>Expart In Travel</h2>
            </div>             

            <div className="about-grid mt-5">
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={guide1} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Liana Juli</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text> 
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={guide2} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Stive Son</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text>
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={guide3} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Marry Cen</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text> 
              </Card.Body>
              </Card>
             </div>
             <div>
             <Card className="pos" style={{ width: '17rem', height: '28rem'}}>
                 <Card.Img variant="top" className="img" src={guide4} />
                 <Card.Body>

       
              <Card.Title className="card-title-s">Atif Khan</Card.Title>
              <p className="review-title">Tour Guide</p>
              <Card.Text className="text-r">
                 <div className="d-flex icon">
                 <i class="fab fa-facebook-square me-3 ms-5"></i>
                 <i class="fab fa-instagram-square  me-3"></i>
                 <i class="fab fa-whatsapp-square me-3"></i>
                 <i class="fab fa-twitter-square"></i>
                </div>
              </Card.Text> 
              </Card.Body>
              </Card>
             </div>

            </div>
            </div>
        </div>
    );
};

export default TourGuide;