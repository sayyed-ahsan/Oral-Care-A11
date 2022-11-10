import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';


const ServicesSection = (props) => {

    const services = props.services;

    return (
        <div >
            <p className='text-center text-orange-400 text-6xl'>Services</p>


            <div className='grid grid-cols-3 gap-2 justify-items-center mx-1 my-8'>
                {
                    services.map(service =>

                        <div key={service?._id}>
                            <div className="card w-90 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <PhotoProvider>
                                        <PhotoView src={service?.image}>
                                            <img className="rounded-xl"
                                                src={service.image} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{service?.sName}</h2>
                                    <p>{service?.description}</p>
                                    <h3 className='text-white'> Price: {service?.price}/=</h3>
                                    <div>
                                        <div className='flex justify-center items-center'>
                                            <div>
                                                <BsFillStarFill></BsFillStarFill>
                                            </div>
                                            <div className='pl-3'>
                                                {service?.rating} Star Rating
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <Link to={`/details/${service?._id}`}>
                                            <button className="btn btn-outline btn-success">Show Detail</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>

            <div className='flex justify-center '>
                <div>
                    <Link to={`/services`}>
                        <button className="btn btn-outline btn-success">See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;