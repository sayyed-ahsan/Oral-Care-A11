import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';
import { BsFillStarFill } from 'react-icons/bs';

const ServiceDetail = () => {
    const { user } = useContext(AuthContext);
    useTitle('Service Detail')
    const serviceDetails = useLoaderData();
    // console.log(serviceDetails.sName)
    // ---------
    const [userRevies, setUserReview] = useState({});
    // --------
    const [allReview, setAllReview] = useState([])

    console.log(allReview)

    useEffect(() => {
        fetch(`https://assignment-ii-sayyed-ahsan.vercel.app/reviews/${serviceDetails._id}`)
            .then(res => res.json())
            .then(data => {
                setAllReview(data)
                console.log(data)
            })
    }, [])







    const handleAddReview = event => {
        event.preventDefault();
        const postReview = { ...userRevies, useremail: user.email, serviceId: serviceDetails._id, serviceName: serviceDetails.sName, time: new Date() }
        console.log(postReview);
        fetch('https://assignment-ii-sayyed-ahsan.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review added successfully');
                    const newallreview = [postReview, ...allReview];
                    setAllReview(newallreview)
                    console.log(allReview)

                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...userRevies }
        newUser[field] = value;
        setUserReview(newUser);
    }

    //------------





    return (
        <div>
            <div className='m-12 pb-12'>
                <div className="card lg:card-side bg-base-100 shadow-xl p-3">
                    <figure><img src={serviceDetails.image} alt="Album" /></figure>
                    <div className="card-body max-w-[60%]">
                        <h2 className="card-title text-3xl">{serviceDetails.sName}</h2>
                        <p>{serviceDetails.description}
                        </p>

                        <div className="card-actions flex justify-end">
                            <p className='text-2xl'>
                                Fee: {serviceDetails.price}/= only
                            </p>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <div>
                                        <BsFillStarFill></BsFillStarFill>
                                    </div>
                                    <div className='pl-3'>
                                        {serviceDetails?.rating} Star Rating
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------- */}

            <h2 className='text-5xl text-center pt-12 mt-12 text-teal-500'>Review Section</h2>

            {
                user ?
                    <>
                        <div className='flex justify-center my-12 py-12'>
                            <div>
                                <h2 className='text-3xl text-center my-5 text-teal-500'>Please Give Review</h2>
                                <form onSubmit={handleAddReview}>
                                    <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required className="input input-bordered input-success w-full max-w-xs my-2" />
                                    <br />
                                    <input onBlur={handleInputBlur} type="text" name='comment' placeholder='comment' required className="input input-bordered input-success w-full max-w-xs my-2" />
                                    <br />
                                    <input onBlur={handleInputBlur} type="url" name="url" id="" placeholder='photo URL' required className="input input-bordered input-success w-full max-w-xs my-2" />
                                    <br />
                                    <input onBlur={handleInputBlur} type="number" name="rating" id="" placeholder='rating' required className="input input-bordered input-success w-full max-w-xs my-2" />
                                    <br />
                                    <button type="submit" className="btn btn-outline btn-success w-full max-w-xs my-2">Post</button>
                                </form>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <Link to={'/login'}>
                            <h2 className='text-3xl text-center my-5 text-teal-500'>Please Login to Review  <button className='btn btn-success btn-outline'> Go to Login</button></h2>

                        </Link>
                    </>
            }

            {/* ------------- */}
            {
                allReview.length > 0 ?
                    <>
                        <h2 className='text-3xl text-center my-5 pb-12 text-teal-500'>People Revies {allReview.length}</h2>
                    </>
                    :
                    <>
                        <h2 className='text-3xl text-center my-5 pb-12 text-teal-500'>No Reviews added yet</h2>
                    </>
            }
            {
                allReview.map(review =>
                    <div className='flex justify-center'>
                        <div className="card w-96 bg-yellow-400 text-primary-content min-w-[50%] my-4">
                            <div className="card-body">
                                <h2 className="card-title">{serviceDetails.sName}</h2>
                                <p>Comment: {review.comment}</p>
                                <div className=' justify-betwen flex justify-between'>
                                    <div className="card-actions items-center ">
                                        <div className="avatar">
                                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review.url} alt="" />
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
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default ServiceDetail;



