import React from 'react';
import Achievements from "./AboutContent/Achievements";
import MainBox from "./AboutContent/MainBox";
import Goals from "./AboutContent/Goals";
import Hobbies from "./AboutContent/Hobbies";
import Languages from "./AboutContent/Languages";
import Nationality from "./AboutContent/Nationality";
import Skills from "./AboutContent/Skills";

const About = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <MainBox/>
            </div>
            <div className="mt-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Nationality/>
                    <Languages/>
                    <Goals/>
                    <Achievements/>
                    <Skills/>
                    <Hobbies/>
                </div>
            </div>
        </div>
    );
};

export default About;