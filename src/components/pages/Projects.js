import React from 'react';
import ProjectData from './Projects/ProjectData';

const Projects = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate">
            <div className="container mx-auto pt-6 pb-8 px-4 sm:pt-12">
                <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-4 sm:mb-8">Projects</h1>
                <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <ProjectData
                        ProjectImage="/media/ffc.JPG"
                        AltImage="FFC"
                        ProjectTitle="Fantasy Fighting Championship"
                        ProjectDesc="Fantasy Fighting Championship is a cutting-edge, free virtual betting
                            website that caters to fans of mixed martial arts, particularly the UFC. It combines
                            the excitement of live fights with the strategic elements of sports betting, all from
                            the comfort of your own home. No real money is involved; instead, users place bets
                            with virtual currency, making it accessible and risk-free."
                        ProjectGoal="Provide a thrilling, immersive, and socially engaging platform for UFC fans."
                    />
                    <ProjectData
                        ProjectImage="/media/portfolio.JPG"
                        AltImage="portfolio"
                        ProjectTitle="Portfolio"
                        ProjectDesc="I decided to create a portfolio for several compelling reasons.
                            First and foremost, it serves as a tangible representation of my journey and growth
                            in my chosen field. As I've progressed in my career, I've amassed a diverse collection
                            of projects, experiences, and skills. This portfolio allows me to curate and showcase
                            the best of what I've accomplished, giving others a comprehensive
                            view of my capabilities."
                        ProjectGoal="Showcase a comprehensive overview of my capabilities."
                        AppLink="https://ralfsportfolio.pages.dev/"
                    />
                    <ProjectData
                        ProjectImage="/media/silmezs.png"
                        AltImage="silmezs"
                        ProjectTitle="Silmežs"
                        ProjectDesc="Silmežs is a project build. This project was built for a company as a new update to their old website.
                        I freelanced to get this opprotunity to create this website with majestic and cool features."
                        ProjectGoal="Create an updated version of the old website."
                        AppLink="https://silmezs.pages.dev/"
                    />
                    <ProjectData
                        ProjectImage="/media/worbx.png"
                        AltImage="worbx"
                        ProjectTitle="Worbx"
                        ProjectDesc="Worbx is an up and coming company for marketing. The main goal was to create a website to
                        introduce the companies founders and workers for a more openning and fourthcoming introduction. Since the company did
                        not develop the website went unfinished."
                        ProjectGoal="Create a website for an up and coming company."
                        AppLink="https://worbex.pages.dev/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;