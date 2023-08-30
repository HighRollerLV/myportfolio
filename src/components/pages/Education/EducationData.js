import React from "react";

const EducationData = ({GraduationImage, ImageAlt, SchoolName, EducationLevel, StartDate, EndDate, Study}) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg gap-2 flex flex-col">
            <img
                src={GraduationImage}
                alt={ImageAlt}
                className="w-28 h-28 object-cover rounded-full mx-auto object-top shadow-lg"
            />
            <h2 className="text-xl font-semibold text-center">{SchoolName}</h2>
            <div className="flex flex-row justify-between">
                <p className="text-gray-600">{EducationLevel}</p>
                <p className="text-gray-600">
                    {StartDate} - {EndDate}
                </p>
            </div>
            <p className="text-gray-600">Degree - {Study}</p>
        </div>
    );
};

export default EducationData;
