import React from 'react';

const Skills = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Skills
                </h3>
                <div className="grid grid-cols-2">
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>HTML/CSS</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>SQL</li>
                        <li>TailwindCSS</li>
                    </ul>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Laravel</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Web Development</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;