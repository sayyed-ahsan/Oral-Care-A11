import React, { useContext, useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    //-----------
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            fetch(`https://assignment-ii-sayyed-ahsan.vercel.app/review/${id}`, {
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
        fetch(`https://assignment-ii-sayyed-ahsan.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data))
    }, [user?.email])
    //-----------
    //-----------

    //-----------
    //-----------


    return (

        <div>

            {
                reviews.length > 0 ?
                    <>
                        <h1 className='text-4xl text-center my-5 text-green-700'>My Reviews</h1>
                    </>
                    :
                    <>
                        <div className='flex items-center justify-center'>
                            <h1 className='text-4xl text-center my-5 text-green-700'>No Reviews Please add review
                            </h1>
                            <div><Link to={'/services'}><button className="btn btn-outline btn-warning mr-4">go to add review </button></Link></div>
                        </div>

                    </>

            }

            {/* <h1 className='text-5xl text-center my-5 text-green-700'>My All Reviews</h1> */}
            {
                reviews.map(review =>

                    <div>
                        <div key={review._id} className='flex justify-center'>
                            <div className="card w-96 bg-green-800 text-primary-content min-w-[50%] my-4">
                                <div className="card-body">
                                    <h2 className="card-title"> {review.serviceName}</h2>
                                    <p>{review.comment}</p>
                                    <div className=' justify-betwen flex justify-between'>
                                        <div className="card-actions items-center ">
                                            <div className="avatar">
                                                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={review?.url} />
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
                    </div>

                )
            }


        </div>

    );
};

export default MyReviews;