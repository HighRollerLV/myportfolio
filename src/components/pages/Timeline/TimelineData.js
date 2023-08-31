import React from 'react';

function TimelineData({YearFrom, YearTo, Subject, Description, TimelineImage, ImageALT, index}) {
    return (
        <div className="flex flex-wrap">
            <div className={`${index % 1 === 0 ? 'md:w-1/2 order-2' : 'md:w-1/2 md:order-2'
            } p-4 md:p-8 relative`}>
                <div className="bg-white p-4 shadow-lg rounded-lg flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <div className="mb-2 text-gray-600">{YearFrom} - {YearTo}</div>
                        <h2 className="text-xl font-semibold">{Subject}</h2>
                        <p className="text-gray-700">{Description}</p>
                    </div>
                    <img src={TimelineImage} alt={ImageALT} className="w-20 h-20 rounded-full"/>
                </div>
            </div>
        </div>
    );
}

export default TimelineData;