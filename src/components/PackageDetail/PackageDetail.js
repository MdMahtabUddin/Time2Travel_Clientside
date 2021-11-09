import React, { useEffect, useState } from 'react';
import './PackageDetail.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import HeadShake from 'react-reveal/HeadShake';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const PackageDetail = () => {

    const { packageId } = useParams();

    const [packageDetails, setPackageDetails] = useState([]);
    console.log('packageDetails', packageDetails);

    const { name } = packageDetails;

    const { user, allBooking, setAllBooking } = useAuth();

    const { displayName, email } = user;

    const [status, setStatus] = useState({ currentStatus: "Pending" });


    // after booking user redirected to the location where he/she came from
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';


    const [checkInDate, setCheckInDate] = useState(new Date());

    // console.log('startDate', checkInDate);


    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: status,
    });

    const onSubmit = data => {
        const onlyDate = checkInDate.toLocaleDateString();
        onlyDate && (data.date = onlyDate);
        console.log('booking data', data)
        axios.post('http://localhost:5000/addBooking', data)
            .then(res => {
                // setStatus(res.data);
                setAllBooking([...allBooking, res.data])
                reset(res.data);
                if (res.data.insertedId) {
                    swal("Booked Successfully!", "We will contact you soon!", "success");
                    reset();
                    history.push(redirect_url);
                    // console.log('package details data after reset', data);
                }
            })

    };

    // useEffect(() => {
    //     console.log(status);
    // }, [status]);


    // loading individual packages by id 
    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch(`http://localhost:5000/packages/${packageId}`);
                results = await results.json();
                setPackageDetails(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="container py-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="row">

                    <div className="col-md-6">
                        <HeadShake>
                            <div>
                                <img className="img-fluid" src={packageDetails.image} alt="" />
                            </div>
                            <h6 className="mt-3">{packageDetails.name}</h6>
                        </HeadShake>
                        <h3 className="mt-3">Group size/ capacity:</h3>
                        <p className="text-secondary lh-lg mt-3">{packageDetails.details}</p>
                        <h3>Activity</h3>
                        <p className="lh-lg text-secondary">{packageDetails.activity}</p>
                    </div>

                    <div className="col-md-6">
                        <div className="book-package shadow rounded py-3">
                            <h2 className="ms-3">Booking Your Package</h2>

                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <label htmlFor="checkIn">Check-in</label>
                                    <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
                                </div>

                                <div className="form-floating mb-3">
                                    {displayName && <input className="form-control" type="text" maxlength="35" defaultValue={displayName} {...register("name", { required: true })} />}
                                    <label>Your name</label>

                                    {errors.name && <span className="form-error-msg">This field is required</span>}
                                </div>

                                <div className="form-floating mb-3">
                                    {email && <input className="form-control" maxlength="35" defaultValue={email}  {...register("email", { required: true })} />}
                                    <label>Your email</label>

                                    {errors.name && <span className="form-error-msg">This field is required</span>}
                                </div>

                                <div className="form-floating mb-3">
                                    {name && <input className="form-control" maxlength="80" defaultValue={name}  {...register("packageName", { required: true })} />}
                                    <label>Package name</label>

                                    {errors.name && <span className="form-error-msg">This field is required</span>}
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" maxlength="100" {...register("details", { required: true })} placeholder="Details" required />
                                    <label className="text-secondary" >Details</label>
                                    {errors.name && <span className="form-error-msg">This field is required</span>}
                                </div>



                                {/* <input type="submit" /> */}
                                <button type="submit" className="btn custom-btn-style rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Confirm Booking
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageDetail;