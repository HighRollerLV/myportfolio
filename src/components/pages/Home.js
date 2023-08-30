import React from 'react';
import HomeContent from "./Home/Content";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate flex flex-row items-center justify-evenly">
                <HomeContent/>
            <img
                src="/media/profileImg.png"
                alt="Ralfs Dambītis"
                className="w-96 h-96 rounded-full mb-4 bg-gradient-to-r from-gray-300 to-gray-600 background-animate shadow-2xl object-cover object-top"
            />
        </div>
    );
};

export default Home;