import React from 'react';

const About = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8 sm:flex sm:items-center sm:justify-between gap-4">
                        <div className="mb-4 sm:mb-0">
                            <img
                                src="/media/aboutMe.jpeg"
                                alt="Your Name"
                                className="h-24 w-24 object-cover rounded-full mx-auto object-top"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                Ralfs Dambītis
                            </h2>
                            <p className="text-xl text-gray-600">
                                Vocational School graduate and University student studying Computer Science.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Nationality
                            </h3>
                            <div className="flex flex-row gap-5">
                                <p className="mt-4 text-gray-600">
                                    Latvian
                                </p>
                                <div className="w-full h-8 mt-4 flex flex-col">
                                    <div className="w-12 h-18 bg-red-900 float-left"></div>
                                    <div className="w-12 h-10 bg-white float-left"></div>
                                    <div className="w-12 h-18 bg-red-900 float-left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Languages
                            </h3>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center">
                                    <p className="text-gray-600">Latvian</p>
                                    <div className="flex space-x-1 ml-auto">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600">English</p>
                                    <div className="flex space-x-1 ml-auto">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600">Russian</p>
                                    <div className="flex space-x-1 ml-auto">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                My Goals
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Describe your career goals and aspirations here.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Achievements
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Highlight your notable achievements and experiences.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Skills
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Highlight your notable achievements and experiences.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Hobbies
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Highlight your notable achievements and experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;