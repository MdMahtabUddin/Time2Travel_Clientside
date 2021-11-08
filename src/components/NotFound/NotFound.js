import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

    console.log('error 404. Page not found!');

    return (
        <div className="text-center py-5">
            <h2>⚠️</h2>
            <h2>error 404</h2>
            <p className="fw-bold">Page not found</p>
            <p>This is usually due to a page being deleted, or a mistyped URL</p>
            <p>But don't worry, you can back to home page from below.</p>
            {/* <h4 className=" py-5">SORRY, WE COULDN'T FIND THAT PAGE!</h4> */}
            <Link to={'/'}>
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;