import React from 'react';

function TimelineData2({ YearFrom, YearTo, Subject, Description, Icon }) {
    return (
        <div className="flex items-center gap-5 z-10 pl-[17.3rem]">
            {/* Circle */}
            <div className="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center">
                <span className="text-slate-500">{Icon}</span>
            </div>
            {/* Year and Content */}
            <div className="text-white text-left">
                <div className="font-semibold mb-2">
                    <p>
                        {YearFrom} {YearTo}
                    </p>
                </div>
                <div className="w-64">
                    <h2 className="text-xl sm:text-2xl font-bold">{Subject}</h2>
                    <p className="text-sm sm:text-base">{Description}</p>
                </div>
            </div>
        </div>
    );
}

export default TimelineData2;