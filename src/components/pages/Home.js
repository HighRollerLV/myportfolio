import React from 'react';
import Typewriter from "../Typewriter";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-start p-6">
                <h1 className="text-4xl font-bold text-slate-50 text-border">Hi, I'm Ralfs Dambītis!</h1>
                <h2 className="text-slate-50 text-lg mt-2">
                    A Passionate <Typewriter text="Front-End Developer"/>
                </h2>
                <p className="text-slate-50 max-w-md mt-4">
                    Specializing in crafting captivating user experiences while embracing back-end challenges.
                    My coding journey is marked by ambition, determination, and a focus on delivering exceptional
                    results.
                </p>
            </div>
            <img
                src="/media/profileImg.png"
                alt="Ralfs Dambītis"
                className="w-80 h-96 rounded-full mb-4 bg-gradient-to-r from-gray-300 to-gray-600 background-animate shadow-2xl"
            />
        </div>
    );
};

export default Home;