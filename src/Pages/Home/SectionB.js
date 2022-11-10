import React from 'react';
import Lottie from "lottie-react";
import img2 from '../../images/lotti/lotte.json'

const SectionB = () => {
    return (
        <div className='my-12 flex items-center'>
            <div><Lottie animationData={img2} loop={true} className=' w-[100%]'></Lottie></div>
            <div className='w-[70%]'>
                <h1 className='text-center text-3xl text-sky-300'>About my <br /> Service Qualit</h1>
                <p className='p-[10px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta quam est distinctio rerum velit cum nulla nostrum nobis animi ea laudantium, quasi quo possimus nihil sequi exercitationem? Nobis, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum molestiae magnam consectetur veniam. Earum asperiores aut numquam reiciendis quis magnam dignissimos est corrupti nostrum? Omnis numquam veritatis quae suscipit? </p>
            </div>
        </div>
    );
};

export default SectionB;