import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const SingleBooking = (props) => {

    const { _id, name, email, packageName, details, date, currentStatus } = props.singleBooking;

    const { setSingleBooking } = props;


    const [allBooking, setAllBooking] = useState([])

    // const [isDelete, setIsDelete] = useState(false);

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
    }, [])


    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/allBooking/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setAllBooking({})
                    swal("Approved!", "Order status updated!", "success");
                    document.location.reload();

                }

            })

    }



    const handleDelete = () => {

        // setIsDelete(true)

        swal({
            title: "Are you sure you want to delete this item?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    const url = `https://nameless-retreat-42432.herokuapp.com/myBooking/${_id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount) {
                                // alert('Deleted!')
                                // setIsDelete(true);
                                swal("Poof! Your booked info has been deleted!", {
                                    icon: "success",
                                });
                                // window.location.reload();
                                // setIsDelete(false);
                                // const restBooking = allBooking.filter(booking => booking._id !== _id)
                                // setAllBooking(restBooking);

                                setSingleBooking(_id);

                            }
                        })
                    // window.scrollTo(0, 0);
                }

                else {
                    swal("Your booking info is safe!");
                }
            });


    }









    return (

        <tbody>
            <tr>
                {/* <th scope="row">{_id}</th> */}
                <td>{name}</td>
                <td>{email}</td>
                <td>{packageName}</td>
                <td>{details}</td>
                <td>{date}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => handleUpdate(_id)}>{currentStatus}</button>
                </td>
                <td>
                    <button className="btn " onClick={() => handleDelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </td>
            </tr>
        </tbody>

    );
};

export default SingleBooking;