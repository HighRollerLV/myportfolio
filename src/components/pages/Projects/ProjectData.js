import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectData = ({ ProjectImage, AltImage, ProjectTitle, ProjectDesc, ProjectGoal, AppLink }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={ProjectImage} alt={AltImage} className="w-full h-60 object-cover object-top"/>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{ProjectTitle}</h2>
                <p className="text-gray-600 mb-3">
                    {showFullDescription ? ProjectDesc : `${ProjectDesc.slice(0, 100)}...`}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={toggleDescription}
                    >
                        {showFullDescription ? " Read less" : " Read more"}
                    </span>
                </p>
                <p className="text-blue-500 font-semibold mb-4">Goal: {ProjectGoal}</p>
                <a href={AppLink} className="text-blue-500 cursor-pointer">
                    <FaExternalLinkAlt className="text-xl inline-block" />
                </a>
            </div>
        </div>
    );
}

export default ProjectData;