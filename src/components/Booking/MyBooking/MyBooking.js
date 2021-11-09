import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';
import NoDataAvailable from '../../NoDataAvilable/NoDataAvilable';
import SingleBooking from '../SingleBooking/SingleBooking';
import './MyBooking.css';
import Bounce from 'react-reveal/Bounce';


const MyBooking = (props) => {

    // const [myBooking, setMyBooking] = useState([])

    const { user, myBooking, setMyBooking } = useAuth();
    const { email } = user;

    const [singleBooking, setSingleBooking] = useState('');

    // loading all booking data based on logged in user email
    // useEffect(() => {
    //     fetch(`https://nameless-retreat-42432.herokuapp.com/myBooking?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => setMyBooking(data))
    // }, [])

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch(`http://localhost:5000/myBooking?email=${email}`);
                results = await results.json();
                setMyBooking(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [singleBooking])

    console.log('myBooking', myBooking);



    return (
        <div>

            {

                myBooking.length == [] ?

                    <NoDataAvailable></NoDataAvailable>

                    :


                    myBooking.length === 0 ?

                        <Loading></Loading>
                        :

                        <div className="container my-5">
                            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                                <h4 className="text-center py-5">
                                    <span className="border-bottom border-3 p-2 border-secondary">
                                        You have booked {myBooking.length} packages
                                    </span>
                                </h4>

                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="table-dark">
                                            <tr>
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
                                            myBooking.map(singleBooking => <SingleBooking
                                                singleBooking={singleBooking}
                                                setSingleBooking={setSingleBooking}
                                                key={singleBooking._id} ></SingleBooking>)
                                        }
                                    </table>
                                </div>
                            </div>

                        </div>

            }
        </div>
    );
};

export default MyBooking;