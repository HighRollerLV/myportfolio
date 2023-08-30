import React from 'react';

const Goals = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    My Goals
                </h3>
                <div className="grid grid-cols-1">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Complete the Bachelors Degree in Computer Science</li>
                        <li>Explore the wonders of Iceland</li>
                        <li>Secure a job in Development</li>
                        <li>Fully master React and Laravel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Goals;