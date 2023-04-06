import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {

    const data = useLoaderData();

    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Home;