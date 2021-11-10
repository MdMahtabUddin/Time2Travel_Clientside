import React from 'react';
import './AddPackage.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const AddPackage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log('data', data)
        axios.post('https://floating-lowlands-13908.herokuapp.com/addPackage', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Added Successfully!", "", "success");
                    reset();
                }
            })

    };

    const activity = 'On tree, On Ground obstacle course, Zip lines, Kayaking, River crossing, Team building games, Fencing, Camp fire, Cycling, Carpentry training for the schools, Potter making'

    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="row col-md-6 mx-auto ">

                    <h4 className="text-center py-5">
                        <span className="border-bottom border-3 border-secondary">
                            Add A New Package
                        </span>
                    </h4>
                    <form className="shadow p-5 mb-5" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <input className="form-control" {...register("name", { required: true })} placeholder="Package Name" required />
                            {errors.name && <span className="form-error-msg">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" {...register("details", { required: true })} placeholder="Details" required />
                            {errors.details && <span className="form-error-msg">This field is required</span>}

                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" {...register("activity", { required: true })} placeholder="Activities" required />
                            {errors.activity && <span className="form-error-msg">This field is required</span>}

                        </div>

                        <div className="mb-3">
                            <input className="form-control" {...register("image", { required: true })} placeholder="Image Url" required />
                            {errors.image && <span className="form-error-msg">This field is required</span>}

                            <p className="text-secondary">
                                <small>
                                    Copy any image url from internet and paste it here.
                                    <br />
                                    example: https://i.ibb.co/d5ykj8S/6.jpg
                                </small>
                            </p>

                        </div>

                        {/* <input type="submit" /> */}
                        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddPackage;