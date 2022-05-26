import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Products></Products>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;