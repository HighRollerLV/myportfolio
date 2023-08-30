import React from 'react';

const Achievements = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Achievements
                </h3>
                <div className="grid grid-cols-1">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Vocational Diploma in Computer Science</li>
                        <li>Finished 2 internships - Latvenergo and DeskTime</li>
                        <li>Enrolled in a University studying Computer Science</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Achievements;