import React from 'react';

function TimelineData2({YearFrom, YearTo, Subject, Description, isEven, Icon}) {

    return (
        <div className="flex items-center gap-5 z-10">
            {/* Circle */}
            <div className="flex justify-center items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center">
                    <span className="text-slate-500">{Icon}</span>
                </div>
            </div>
            <div className="ml-4 flex flex-col text-left text-white">
                {/* Year */}
                <div className="font-semibold mb-2"><p>{YearFrom} {YearTo}</p></div>
                {/* Content */}
                <h2 className="text-2xl font-bold">{Subject}</h2>
                <p className="text-base">{Description}</p>
            </div>
        </div>
    );
}

export default TimelineData2;