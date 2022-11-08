import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const allService = useLoaderData();
    const img = allService[1].image;
    console.log(img);
    return (
        <div className='grid grid-cols-2 gap-6 justify-items-center my-8'>
            {
                allService.map(service =>
                    <div key={service._id}>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.sName}</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit nesciunt voluptatem at, reicijsdl;</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Services;