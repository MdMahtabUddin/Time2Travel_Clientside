import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';



const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios('http://localhost:8000/services',data)
    .then(res=>{
      console.log(res);
    })

  };


    return (
      <div>
      <div>
        <h1 className="mt-5 text-center text-info">Please Add Services</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <input {...register("description")} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="Price" />
      <input {...register("img")} placeholder="Image" />

      <input type="submit" />
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddService;