import React from 'react';

const Hobbies = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Hobbies
                </h3>
                <div className="grid grid-cols-2">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Hunting</li>
                        <li>Fishing</li>
                        <li>Weightlifting/Gym</li>
                        <li>Boxing/MMA</li>
                    </ul>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>History Buffing</li>
                        <li>Project Development</li>
                        <li>Traveling</li>
                        <li>Hiking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;