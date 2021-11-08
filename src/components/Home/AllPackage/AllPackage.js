import React, { useEffect, useState } from 'react';
import './AllPackage.css';
import Loading from '../../Loading/Loading';
import SinglePackage from '../SinglePackage/SinglePackage';

const AllPackage = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://nameless-retreat-42432.herokuapp.com/packages');
                results = await results.json();
                setPackages(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="container my-5" id="allPackages">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="text-center py-5 ">
                    <h1 className="display-1 fw-bold">Feel The <span className="custom-khaki-color">Adventures</span></h1>
                    <p className="text-secondary font-weight-light lh-lg">
                        BOOK YOUR PREFERABLE PACKAGE FROM MORE THAN JUST A VACATION SPOT TO ENJOY & RELAX
                        <br />
                        DURING YOUR HOLIDAYS BASE CAMP IS A STORE HOUSE OF PROMISING HIGH-RISE ACTIVITIES
                        <br />
                        THAT BLENDS YOUR LOVE FOR NATURE & ENTHUSIASM FOR ADVENTURE CHURNING OUT THE FEAR FACTOR FROM YOU.
                    </p>
                </div>

                {
                    packages.length === 0 ?

                        <Loading></Loading>

                        :

                        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                            {
                                packages.map(packageDetails => <SinglePackage packageDetails={packageDetails} key={packageDetails._id}></SinglePackage>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default AllPackage;