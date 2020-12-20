import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchResult from '../SearchResult/SearchResult';

const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <SearchResult/>
        </div>
    );
};

export default Home;