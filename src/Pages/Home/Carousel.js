import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/banner/1.png'
import img2 from '../../images/banner/2.png'
import img3 from '../../images/banner/3.png'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img2} className="w-full " />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <p className='text-center text-5xl text-orange-400'>Welcome to Dr. Strange <br></br> Website</p>
                            <p className='text-center text-2xl m-4 text-black'>Our teeth have such an important <br /> role to play in our lives. </p>
                            <Link to={'/services'} className='flex justify-center '>
                                <div>
                                    <button className="btn glass btn-outline btn-success">Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <p className='text-center text-5xl text-orange-400'>Welcome to Dr. Strange <br></br> Website</p>
                            <p className='text-center text-2xl m-4 text-black'>Our teeth have such an important <br /> role to play in our lives. </p>
                            <Link to={'/services'} className='flex justify-center '>
                                <div>
                                    <button className="btn glass btn-outline btn-success">Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div>
                            <p className='text-center text-5xl text-orange-400'>Welcome to Dr. Strange <br></br> Website</p>
                            <p className='text-center text-2xl m-4 text-black'>Our teeth have such an important <br /> role to play in our lives. </p>
                            <Link to={'/services'} className='flex justify-center '>
                                <div>
                                    <button className="btn glass btn-outline btn-success">Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;