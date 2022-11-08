import Lottie from "lottie-react"; import React from 'react';
import img1 from '../../images/lotti/lotiimg.json'

const SectionA = () => {
    return (
        <div>
            <div>
                <Lottie animationData={img1} loop={true} className='w-full md:w-[40%]'></Lottie>
            </div>
        </div>
    );
};

export default SectionA;