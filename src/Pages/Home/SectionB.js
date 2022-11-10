import React from 'react';
import Lottie from "lottie-react";
import img2 from '../../images/lotti/lotte.json'

const SectionB = () => {
    return (
        <div>
            <div className='my-12 flex items-center'>

                <div className='w-4/9'><Lottie animationData={img2} loop={true} ></Lottie></div>

                <div className='w-5/9  p-10 m-5'>
                    <h1 className='text-3xl text-sky-300'>About my <br /> Service Qualit</h1>
                    <p className=''> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta quam est distinctio rerum velit cum nulla nostrum nobis animi ea laudantium, quasi quo possimus nihil sequi exercitationem? Nobis, nisi. Lorem ipsum dolor sit amet consectetur adipi </p>
                    <h1 className='text-3xl text-sky-300'>About my Self</h1>
                    <p className=''> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta quam est distinctio rerum velit cum nulla nostrum nobis animi ea laudantium, quasi quo possimus nihil sequi exercitationem? Nobis, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum molestiae magnam consectetur veniam. Earum asperior </p>
                </div>
            </div>
        </div>
    );
};

export default SectionB;