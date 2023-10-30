import React from 'react';
import {GiDiploma} from "react-icons/gi";
import {PiStudentBold} from "react-icons/pi";

const Achievements = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Achievements
                </h3>
                <div className="grid grid-cols-1">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2">
                            <GiDiploma/> Vocational Diploma in Computer Science</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2">
                            <PiStudentBold/> Finished 2 internships - Latvenergo and DeskTime</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Achievements;