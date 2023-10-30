import React from 'react';
import {FaCss3, FaDatabase, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact} from 'react-icons/fa';
import {FaMobileScreen} from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Skills
                </h3>
                <div className="grid grid-cols-2">
                    <div className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaHtml5/> HTML</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaCss3/> CSS</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaPhp/> PHP</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2">
                            <FaDatabase/> SQL/MySQL</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><SiTailwindcss/> TailwindCSS</p>
                    </div>
                    <div className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaLaravel/> Laravel
                        </p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaReact/> React</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaJs/> Javascript</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><CgWebsite/>Web Development</p>
                        <p className="flex flex-row items-center text-center justify-start gap-2"><FaMobileScreen/> Responsive
                            Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

