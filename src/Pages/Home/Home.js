import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel';
import SectionA from './SectionA';
import SectionB from './SectionB';
import ServicesSection from './ServicesSection';

const Home = () => {
    const services = useLoaderData();
    // console.log(services[0])
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <SectionB></SectionB>
            <ServicesSection services={services}></ServicesSection>
            <SectionA></SectionA>
        </div>
    );
};

export default Home;