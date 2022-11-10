import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { BsFillStarFill } from 'react-icons/bs';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    useTitle('Services')
    const allService = useLoaderData();
    const img = allService[1].image;

    if (allService.length) {
        return <h1 className='text-8xl text-center'>Loding...</h1>
    }


    // console.log(img);
    return (
        <div className='grid grid-cols-3 gap-2 justify-items-center mx-1 my-8'>
            {
                allService.map(service =>
                    <div key={service._id}>

                        <div className="card w-90 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <PhotoProvider>
                                    <PhotoView src={service.image}>
                                        <img className="rounded-xl"
                                            src={service.image} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.sName}</h2>
                                <p>{service.description.substring(0, 100) + "..."}</p>
                                <div>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <BsFillStarFill></BsFillStarFill>
                                        </div>
                                        <div className='pl-3'>
                                            {service.rating} Star Rating
                                        </div>
                                    </div>
                                </div>
                                <p className='text-1xl text-white'>
                                    Fee: {service.price}/= only
                                </p>
                                <div className="card-actions">
                                    <Link to={`/details/${service._id}`}>
                                        <button className="btn btn-outline btn-success">Show Detail</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

// <div className="card w-90 bg-base-100 shadow-xl image-full">
//     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//     <div className="card-body">
//         <h2 className="card-title">{service.sName}</h2>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit nesciunt voluptatem at, reicijsdl;</p>
//         <div className="card-actions justify-end">
//             <button className="btn btn-outline btn-success">Show Detail</button>
//         </div>
//     </div>
// </div>

export default Services;