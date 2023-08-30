import React from 'react';

const Nationality = () => {
    return (
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
    );
};

export default Nationality;