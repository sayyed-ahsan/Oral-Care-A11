import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';

const EditRevies = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();


    const [service, setService] = useState({});

    const navigate = useNavigate();

    const handleAddReview = event => {
        event.preventDefault();
        const postReview = { ...service, useremail: user.email, serviceId: review._id, time: new Date() }
        console.log(postReview);

        //------
        fetch(`http://localhost:5000/edit/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                    // console.log(data);
                    navigate('/myreviews')
                }

            })
        //-----------

    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }

    //--------
    return (
        <div className='flex justify-center my-12 py-12'>
            <div>
                <h2 className='text-3xl text-center my-5 text-teal-500'>Update Review</h2>
                <form onSubmit={handleAddReview}>
                    <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required className="input input-bordered input-success w-full max-w-xs my-2" />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name='comment' placeholder='comment' required className="input input-bordered input-success w-full max-w-xs my-2" />
                    <br />
                    <input onBlur={handleInputBlur} type="url" name="url" id="" placeholder='photo URL' required className="input input-bordered input-success w-full max-w-xs my-2" />
                    <br />
                    <input onBlur={handleInputBlur} type="number" name="rating" id="" placeholder='rating' required className="input input-bordered input-success w-full max-w-xs my-2" />
                    <br />
                    <button type="submit" className="btn btn-outline btn-success w-full max-w-xs my-2">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditRevies;