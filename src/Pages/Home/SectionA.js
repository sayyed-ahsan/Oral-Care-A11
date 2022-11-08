import Lottie from "lottie-react"; import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../images/lotti/lotiimg.json'

const SectionA = () => {
    return (
        <div>
            <div className="flex justify-around m-6">
                <div><Lottie animationData={img1} loop={true} className='w-full w-[80%]'></Lottie></div>
                <div className="flex items-center">
                    <div className="w-[90%]">
                        <h1 className="text-4xl text-orange-400">This is section A</h1>
                        <h1 className="">This is section Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus, atque assumenda ex minus natus recusandae explicabo qui quas nesciunt reiciendis provident iure quos inventore cumque quidem tempora laudantium fugit. A</h1>
                        <div className="my-3">
                            <Link to={'/blog'}><button className="btn btn-outline btn-success">Success</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionA;