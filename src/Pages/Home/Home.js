import React from 'react';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel';
import SectionA from './SectionA';
import ServicesSection from './ServicesSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <SectionA></SectionA>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;