import React from 'react';
import TimelineData from "./Timeline/TimelineData";
import TimelineData2 from "./Timeline/TimelineData2";
import {UilGraduationCap, UilPen, UilRocket, UilStar, UilUniversity,} from '@iconscout/react-unicons';
import {FaPhp, FaReact, FaUnity} from "react-icons/fa";
import {SiReact, SiTailwindcss, SiCplusplus} from "react-icons/si";
import {TbBrandLaravel} from "react-icons/tb";
import {IoLogoJavascript} from "react-icons/io";


const Timeline = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate">
            <div className="container mx-auto flex justify-center items-center">
                <div className="relative h-full w-11/12 md:w-9/12 lg:w-3/6 justify-center items-center flex">
                    {/* Vertical line */}
                    <div
                        className="absolute bg-gradient-to-l from-slate-300 to-gray-500 background-animate
                        h-full w-12 shadow-2xl">
                    </div>

                    {/* Timeline items */}
                    <div className="flex flex-col pl-10 pr-4 py-4 gap-6">
                        <TimelineData
                            YearFrom="2018"
                            YearTo="- 2019"
                            Subject="Programming Courses"
                            Description="Started going to programming courses. Basics in HTML/CSS"
                            index={1}
                            Icon={<UilRocket/>}
                        />
                        <TimelineData2
                            YearFrom="2019"
                            Subject="Finished Middle School"
                            Description="Finished Middle School in DACVĢ"
                            index={2}
                            Icon={<UilGraduationCap/>}
                        />
                        <TimelineData
                            YearFrom="2019"
                            YearTo="- 2023"
                            Subject="VTDT Vocational School"
                            Description="Started going to a vocation school studying Computer Science"
                            index={3}
                            Icon={<UilUniversity/>}
                        />
                        <TimelineData2
                            YearFrom="2019"
                            Subject="Started learning C++"
                            Description="In Vocational school started learning C++"
                            index={4}
                            Icon={<SiCplusplus />}
                        />
                        <TimelineData
                            YearFrom="2020"
                            Subject="Started learning PHP and MySQL"
                            Description="In Vocational school started learning PHP and MySQL"
                            index={5}
                            Icon={<FaPhp />}
                        />
                        <TimelineData2
                            YearFrom="06/2022"
                            YearTo="- 03/2022"
                            Subject="Internship at Latvenergo"
                            Description="Started internship at Latvenergo as a IT Specialist"
                            index={6}
                            Icon={<UilPen/>}
                        />
                        <TimelineData
                            YearFrom="2022"
                            Subject="TailwindCSS"
                            Description="Started learning TailwindCSS for personal use"
                            index={7}
                            Icon={<SiTailwindcss />}
                        />
                        <TimelineData2
                            YearFrom="2022"
                            Subject="Javascript"
                            Description="In Vocational school started learning Javascript"
                            index={8}
                            Icon={<IoLogoJavascript />}
                        />
                        <TimelineData
                            YearFrom="09/2022"
                            YearTo="- 06/2023"
                            Subject="Graduation Project"
                            Description="Created a Graduation project that focused on MMA and included - Databases,
                            Api, Javascript, PHP and TailwindCSS"
                            index={9}
                            Icon={<UilStar/>}
                        />
                        <TimelineData2
                            YearFrom="01/2023"
                            YearTo="- 05/2023"
                            Subject="Internship at DeskTime"
                            Description="Started internship at DeskTime as a Developer"
                            index={10}
                            Icon={<UilPen/>}
                        />
                        <TimelineData
                            YearFrom="2023"
                            Subject="Laravel"
                            Description="Started learning the Larvel framework at DeskTime"
                            index={11}
                            Icon={<TbBrandLaravel />}
                        />
                        <TimelineData2
                            YearFrom="2023"
                            Subject="Finished Vocational School VTDT"
                            Description="Graduated Vocational School and got a Vocational Diploma in Computer Science"
                            index={12}
                            Icon={<UilGraduationCap/>}
                        />
                        <TimelineData
                            YearFrom="2023"
                            Subject="React"
                            Description="Started learning the React framework for personal use"
                            index={13}
                            Icon={<FaReact />}
                        />
                        <TimelineData2
                            YearFrom="2024"
                            Subject="React Native"
                            Description="Started Learning React Native for a project"
                            index={14}
                            Icon={<SiReact />}
                        />
                        <TimelineData
                            YearFrom="2024"
                            Subject="Unity and C#"
                            Description="Started learning Unity and C# to develop a project"
                            index={15}
                            Icon={<FaUnity />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;