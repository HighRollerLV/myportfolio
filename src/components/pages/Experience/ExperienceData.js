import React, {useState} from 'react';

function ExperienceData({
                            CompanyImage,
                            CompanyNameALT,
                            CompanyName,
                            DateFrom,
                            DateTo,
                            Role,
                            Description,
                            CompanyWebsite
                        }) {
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
            <div className="flex items-center mb-2">
                <img
                    src={CompanyImage}
                    alt={CompanyNameALT}
                    className="w-20 h-20 mr-4 rounded-full"
                />
                <div>
                    <span className="font-semibold text-lg">
                        {CompanyName}
                    </span>
                    <br/>
                    <span className="text-gray-500 text-sm">
                        {DateFrom} - {DateTo}
                    </span>
                </div>
            </div>
            <p className="text-base font-semibold mt-2">
                {Role}
            </p>
            <div className="mt-2 text-gray-700">
                {expanded ? (
                    <p>{Description}</p>
                ) : (
                    <p>{Description.slice(0, 150)}...</p>
                )}
            </div>
            <div className="mt-4">
                <a
                    href={CompanyWebsite}
                    className="text-blue-500 hover:underline transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Company Website
                </a>
                <button
                    className="ml-2 text-blue-500 hover:underline focus:outline-none"
                    onClick={toggleDescription}
                >
                    {expanded ? 'Show Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
}

export default ExperienceData;