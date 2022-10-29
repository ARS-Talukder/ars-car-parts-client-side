import React from 'react';
import Banner from './Banner';
import Business from './Business';
import BusinessPolicy from './BusinessPolicy';
import Footer from './Footer';
import Terms from './Terms';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <BusinessPolicy></BusinessPolicy>
            <Terms></Terms>
            <Footer></Footer>
        </div>
    );
};

export default Home;