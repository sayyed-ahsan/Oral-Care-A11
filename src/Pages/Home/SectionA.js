import Lottie from "lottie-react";
import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../images/lotti/lotiimg.json'
import loader from '../../images/lotti/loder.json'

const SectionA = () => {
    return (
        <div className='my-12 flex items-center'>

            <div className='w-4/9'><Lottie animationData={img1} loop={true} ></Lottie></div>

            <div className='w-5/9  p-10 m-5'>
                <h1 className='text-3xl text-sky-300'>About my <br /> Service Qualit</h1>
                <p className=''> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta quam est distinctio rerum velit cum nulla nostrum nobis animi ea laudantium, quasi quo possimus nihil sequi exercitationem? Nobis, nisi. Lorem ipsum dolor sit amet consectetur adipi </p>
            </div>
        </div>
    );
};

export default SectionA;



//   {/* <div className="flex item-center">
//                     <div className="w-[40%]">
//                         <h1 className="text-4xl text-orange-400">This is section A</h1>
//                         <h1 className="">This is section Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus, atque assumenda ex minus natus recusandae explicabo qui quas nesciunt reiciendis provident iure quos inventore cumque quidem tempora laudantium fugit. A</h1>
//                         <div className="my-3">
//                             <Link to={'/blog'}><button className="btn btn-outline btn-success">Blogs</button></Link>
//                         </div>
//                     </div>
//                 </div> */}