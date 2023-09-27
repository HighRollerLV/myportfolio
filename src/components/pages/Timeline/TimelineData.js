import React from 'react';

function TimelineData({ YearFrom, YearTo, Subject, Description, Icon }) {
    return (
        <div className="flex items-center gap-5 z-10 pr-[18.8rem]">
            {/* Year and Content */}
            <div className="text-white text-right">
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
            {/* Circle */}
            <div className="w-10 h-10 bg-slate-500 rounded-full flex justify-center items-center">
                <span className="text-gray-700">{Icon}</span>
            </div>
        </div>
    );
}

export default TimelineData;