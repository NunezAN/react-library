import React from 'react';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

const Home = () => {
    return (
        <>
        <Landing></Landing>
        <Highlights></Highlights>
        <Featured></Featured>
        <Discounted></Discounted>
        <Explore></Explore>
        </>
    );
}

export default Home;
