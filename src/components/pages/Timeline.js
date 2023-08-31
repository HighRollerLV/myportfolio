import React from 'react';
import TimelineData from "./Timeline/TimelineData";

const Timeline = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate">
            <div className="container mx-auto">
                <TimelineData YearFrom="2010" YearTo="2012" Subject="GANG"
                              Description="Why are you being gang if being gang means that gang is gang"
                              TimelineImage="/media/desktime.png" ImageALT="desktime" index={1}/>
                <TimelineData YearFrom="2012" YearTo="2014" Subject="GANG"
                              Description="Why are you being gang if being gang means that gang is gang"
                              TimelineImage="/media/desktime.png" ImageALT="desktime" index={2}/>
                <TimelineData YearFrom="2014" YearTo="2016" Subject="GANG"
                              Description="Why are you being gang if being gang means that gang is gang"
                              TimelineImage="/media/desktime.png" ImageALT="desktime" index={3}/>
            </div>
        </div>
    );
};

export default Timeline;