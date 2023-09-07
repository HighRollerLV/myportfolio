import React from 'react';

function TimelineData({YearFrom, YearTo, Subject, Description, isEven, Icon}) {

    return (
        <div className="flex items-center gap-5 z-10">
            <div className="ml-4 flex flex-col text-right text-white">
                {/* Year */}
                <div className="font-semibold mb-2"><p>{YearFrom} {YearTo}</p></div>
                {/* Content */}
                <h2 className="text-2xl font-bold">{Subject}</h2>
                <p className="text-base">{Description}</p>
            </div>
            {/* Circle */}
            <div className="flex justify-center items-center">
                <div className="w-10 h-10 bg-slate-500 rounded-full flex justify-center items-center">
                    <span className="text-gray-700">{Icon}</span>
                </div>
            </div>
        </div>
    );
}

export default TimelineData;