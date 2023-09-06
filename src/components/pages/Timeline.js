import React from 'react';
import TimelineData from "./Timeline/TimelineData";
import TimelineData2 from "./Timeline/TimelineData2";
import {
    UilRocket,
    UilUniversity,
    UilPen,
    UilStar,
    UilPlus,
} from '@iconscout/react-unicons';


const Timeline = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate">
            <div className="container mx-auto">
                <div className="relative h-full justify-center items-center flex">
                    {/* Vertical line */}
                    <div
                        className="absolute bg-gradient-to-l from-slate-300 to-gray-500 background-animate
                        h-full w-12 shadow-2xl left-1/2 top-0 transform -translate-x-1/2">
                    </div>

                    {/* Timeline items */}
                    <div className="flex flex-col justify-between items-start pl-10 pr-4 py-4 gap-6">
                        <TimelineData
                            YearFrom="2018"
                            YearTo="- 2019"
                            Subject="Programming Courses"
                            Description="Started going to programming courses. Basics in HTML/CSS"
                            index={1}
                            Icon={<UilRocket />}
                        />
                        <TimelineData2
                            YearFrom="2019"
                            Subject="Finished Middle School"
                            Description="Finished Middle School in DACVĢ"
                            index={2}
                            Icon={<UilUniversity />}
                        />
                        <TimelineData
                            YearFrom="2019"
                            YearTo="- 2023"
                            Subject="VTDT Vocational School"
                            Description="Started going to a vocation school studying Computer Science"
                            index={3}
                            Icon={<UilUniversity />}
                        />
                        <TimelineData2
                            YearFrom="2019"
                            Subject="Started learning C++"
                            Description="In Vocational school started learning C++"
                            index={4}
                            Icon={<UilPlus />}
                        />
                        <TimelineData
                            YearFrom="2020"
                            Subject="Started learning PHP and MySQL"
                            Description="In Vocational school started learning PHP and MySQL"
                            index={5}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData2
                            YearFrom="06/2022"
                            YearTo="- 03/2022"
                            Subject="Internship at Latvenergo"
                            Description="Started internship at Latvenergo as a IT Specialist"
                            index={6}
                            Icon={<UilPen />}
                        />
                        <TimelineData
                            YearFrom="2022"
                            Subject="Started Learning TailwindCSS"
                            Description="Started leaning TailwindCSS for personal use"
                            index={7}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData2
                            YearFrom="2022"
                            Subject="Started learning Javascript"
                            Description="In Vocational school started learning Javascript"
                            index={8}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData
                            YearFrom="09/2022"
                            YearTo="- 06/2023"
                            Subject="Graduation Project"
                            Description="Created a Graduation project that focused on MMA and included - Databases,
                            Api, Javascript, PHP and TailwindCSS"
                            index={9}
                            Icon={<UilStar />}
                        />
                        <TimelineData2
                            YearFrom="01/2023"
                            YearTo="- 05/2023"
                            Subject="Internship at DeskTime"
                            Description="Started internship at DeskTime as a Developer"
                            index={10}
                            Icon={<UilPen />}
                        />
                        <TimelineData
                            YearFrom="2023"
                            Subject="Started learning Laravel"
                            Description="Started leaning Laravel at DeskTime"
                            index={11}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData2
                            YearFrom="2023"
                            Subject="Finished Vocational School VTDT"
                            Description="Graduated Vocational School and got a Vocational Diploma in Computer Science"
                            index={12}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData
                            YearFrom="2023"
                            Subject="Started learning React"
                            Description="Started learning React for personal use"
                            index={13}
                            Icon={<UilPlus  />}
                        />
                        <TimelineData2
                            YearFrom="09/2023"
                            YearTo="- 2027"
                            Subject="Started VA University"
                            Description="Enrolled in Vidzmes Augstskola (University)"
                            index={14}
                            Icon={<UilUniversity />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;