import React from 'react';
import ProjectData from './Projects/ProjectData';

const Projects = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate">
            <div className="container mx-auto pt-12 pb-8 px-4">
                <h1 className="text-4xl font-semibold text-white mb-8">Projects</h1> {/* Added title */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectData ProjectImage="/media/ffc.JPG" AltImage="FFC"
                                 ProjectTitle="Fantasy Fighting Championship"
                                 ProjectDesc="Fantasy Fighting Championship is a cutting-edge, free virtual betting
                                 website that caters to fans of mixed martial arts, particularly the UFC. It combines
                                 the excitement of live fights with the strategic elements of sports betting, all from
                                 the comfort of your own home. No real money is involved; instead, users place bets
                                 with virtual currency, making it accessible and risk-free."
                                 ProjectGoal="Provide a thrilling, immersive, and socially engaging platform for
                                 UFC fans."/>
                    <ProjectData ProjectImage="/media/portfolio.JPG" AltImage="portfolio" ProjectTitle="Portfolio"
                                 ProjectDesc="I decided to create a portfolio for several compelling reasons.
                                 First and foremost, it serves as a tangible representation of my journey and growth
                                 in my chosen field. As I've progressed in my career, I've amassed a diverse collection
                                 of projects, experiences, and skills. This portfolio allows me to curate and showcase
                                 the best of what I've accomplished, giving others a comprehensive
                                 view of my capabilities."
                                 ProjectGoal="Showcase a comprehensive overview of my capabilities."/>
                </div>
            </div>
        </div>
    );
};

export default Projects;