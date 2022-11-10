import React, { useContext, useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    //-----------
    const handleDelete = id => {
        // console.log(id)
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    //-----------
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    //-----------
    //-----------

    //-----------


    return (

        <div>

            <h1 className='text-5xl text-center my-5 text-green-700'>My All Reviews</h1>
            {
                reviews.map(review =>
                    <div key={review._id} className='flex justify-center'>
                        <div className="card w-96 bg-green-800 text-primary-content min-w-[50%] my-4">
                            <div className="card-body">
                                <h2 className="card-title">Service Name</h2>
                                <p>{review.comment}</p>
                                <div className=' justify-betwen flex justify-between'>
                                    <div className="card-actions items-center ">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review?.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <p>{review.name}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <BsFillStarFill></BsFillStarFill>
                                        </div>
                                        <div className='pl-3'>
                                            {review.rating} Star Rating
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <Link to={`/edit/${review._id}`}><button className="btn btn-outline btn-warning mr-4">Edit Review</button></Link>
                                    <button onClick={() => handleDelete(review._id)} className="btn btn-outline btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>

    );
};

export default MyReviews;