import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <p className=' text-6xl text-orange-400'>This is titel</p>
                            <p className='text-center text-orange-400'>pag title 2</p>
                            <Link to={'/services'} className='flex justify-center '>
                                <div>
                                    <button className="btn glass btn-outline btn-success">Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <p className=' text-5xl text-orange-400'>This is titel</p>
                            <p className='text-center text-orange-400'>pag title 2</p>
                            <Link to={'/services'} className='flex justify-center '>
                                <div>
                                    <button className="btn glass btn-outline btn-success">Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;