import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const allService = useLoaderData();
    const img = allService[1].image;
    console.log(img);
    return (
        <div className='grid grid-cols-3 gap-2 justify-items-center mx-1 my-8'>
            {
                allService.map(service =>
                    <div key={service._id}>

                        <div className="card w-90 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-success">Show Detail</button>
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