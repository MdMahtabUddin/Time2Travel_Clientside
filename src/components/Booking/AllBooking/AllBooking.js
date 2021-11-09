import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import SingleBooking from '../SingleBooking/SingleBooking';
import './AllBooking.css';
import Bounce from 'react-reveal/Bounce';
import Header from '../../Header/Header';
import { createContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoDataAvailable from '../../NoDataAvilable/NoDataAvilable';

export const HeaderContext = createContext();

const AllBooking = () => {

    // const [allUserBooking, setAllUserBooking] = useState([])


    const { allBooking, setAllBooking } = useAuth();
    console.log('allBooking', allBooking);

    const totalBooking = allBooking.length;

    const [singleBooking, setSingleBooking] = useState('');

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('http://localhost:5000/allBooking');
                results = await results.json();
                setAllBooking(results);

            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [singleBooking])

    // useEffect(() => {
    //     const restBooking = allBooking?.filter(booking => booking._id !== singleBooking);
    //     setAllBooking(restBooking);
    // }, [singleBooking])


    return (

        // <HeaderContext.Provider value={totalBooking}>
        <div>


            {

                allBooking.length == [] ?

                    <NoDataAvailable></NoDataAvailable>

                    :

                    allBooking.length === 0 ?

                        <Loading></Loading>

                        :

                        <div className="container my-5">
                            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                                <h4 className="text-center py-5">
                                    <span className="border-bottom border-3 p-2 border-secondary ">
                                        Total Booking : {allBooking.length}
                                    </span>
                                </h4>

                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-dark">
                                            <tr>
                                                {/* <th scope="col">ID</th> */}
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Package Name</th>
                                                <th scope="col">Details</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        {
                                            allBooking.map(singleBooking => <SingleBooking singleBooking={singleBooking} setSingleBooking={setSingleBooking}></SingleBooking>)
                                        }
                                    </table>
                                </div>
                            </div>

                        </div>
            }


        </div>
        // </HeaderContext.Provider>
    );
};

export default AllBooking;
