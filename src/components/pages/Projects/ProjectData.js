import React from "react";

const ProjectData = ({ ProjectImage, AltImage, ProjectTitle, ProjectDesc, ProjectGoal }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={ProjectImage} alt={AltImage} className="w-full h-60 object-cover object-top"/>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{ProjectTitle}</h2>
                <p className="text-gray-600 mb-3">{ProjectDesc}</p>
                <p className="text-blue-500 font-semibold">Goal: {ProjectGoal}</p>
            </div>
        </div>
    );
}

export default ProjectData;