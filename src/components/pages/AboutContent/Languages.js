import React from 'react';

const Languages = () => {
    return (
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
    );
};

export default Languages;