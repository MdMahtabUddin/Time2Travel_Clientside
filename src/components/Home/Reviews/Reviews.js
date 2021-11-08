import React from 'react';
import './Reviews.css';
import Slider from "react-slick";
import Rating from 'react-rating';

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className="container-fluid review-section text-white bordered rounded-3" id="reviews">
            <div className="container text-center text-white py-5">
                <div>
                    <img className="img-fluid" src="https://i.ibb.co/QDw1n4N/review-Gif.gif" alt="" style={{ height: 200 }} />
                </div>
                <div>
                    <p>BaseCamp Review 4.2/5</p>
                </div>
                <Slider {...settings}>
                    <div >
                        <h4 className="fw-bold text-uppercase">Lalaine</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={4.5}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            Everything is good except that the room was hot if the room maybe a little cooler. using the ac didn't help.
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-bold text-uppercase">Trevor Breck</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={4}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            Stayed in the King suite, which was a large room with sofa bed. Comfortable bed and pillows, and a nice basket breakfast every day. While some complained about the train, if the fan on the A/C unit is on, you really don’t hear it.Only concern is if you leave the windows open, anyone could pretty much get in. Small alleyway means cars drive very close to the window - you feel like a drive-thru. But great staff and good location.
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-bold text-uppercase">Jason Mills</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={3}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            So impressed with our stay at Basecamp. We had a large, 10-person suite at the Resort... it was roomy, fully stocked, beautifully furnished, and had the easiest check-in and check-out. For anyone with a large group (family, group of friend, etc.) I can't recommend this enough. And the rooftop hot tub has the best views!
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-bold text-uppercase">Jessica</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={5}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            Everything was awesome except the people upstairs. which is out of basecamp control.
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-bold text-uppercase">Heather</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={4}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            Great location, clean room and I really appreciated the quality bathroom products (Rocky Mountain House shampoo, soap, etc). Nothing really to improve on.
                        </p>
                    </div>
                    <div>
                        <h4 className="fw-bold text-uppercase">JudyBGiles</h4>
                        <div className="star-rating">
                            <Rating
                                initialRating={5}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                        <p className="fs-5 col-md-6 mx-auto review">
                            We stayed in a 3 bedroom condo and were a party of 7. Lots of room, high standards of amenities, clean, quiet and amazing location. I will definitely stay again whenever we are in Canmore and have recommended to friends!
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;