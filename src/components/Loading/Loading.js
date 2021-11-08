import React from 'react';

const Loading = () => {

    return (
        <div className="text-center text-secondary mb-5 mt-3">
            <div className="">
                <p className="text-center">Loading your data...</p>
            </div>
            <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;