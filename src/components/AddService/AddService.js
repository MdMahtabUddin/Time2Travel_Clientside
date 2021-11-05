import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';



const AddService = () => {
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    return (
        <div className="my-5">
      <h2>Add Offer Please</h2>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form >
              <input
                // {...register("pricePerPerson")}
                placeholder="price per person"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                // {...register("duration")}
                placeholder="Stay duration(3 days/2 night)"
                type="text"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                // {...register("name")}
                placeholder="Place Name"
               
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                // {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                // {...register("rating")}
                placeholder="rating"
                className="p-2 m-2 w-100"
              />
              

              {/* {errors.exampleRequired && <span>This field is required</span>} */}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddService;