import React from 'react';
import {SlChemistry} from "react-icons/sl";
import {GiIceland, GiSmart} from "react-icons/gi";
import {BsPersonWorkspace} from "react-icons/bs";

const Goals = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    My Goals
                </h3>
                <div className="grid grid-cols-1">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2"><SlChemistry/> Advance
                            and further my experience in programming</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiIceland/> Explore
                            the wonders of Iceland</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2">
                            <BsPersonWorkspace/> Secure a job in Development</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><GiSmart/> Fully
                            master React and Laravel</p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Goals;