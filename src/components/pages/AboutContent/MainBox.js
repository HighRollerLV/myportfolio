import React from 'react';

const MainBox = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:flex sm:items-center sm:justify-between gap-4">
                <div className="mb-4 sm:mb-0">
                    <img
                        src="/media/aboutMe.jpeg"
                        alt="Ralfs_D"
                        className="h-36 w-36 object-cover rounded-full mx-auto object-top"
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
    );
};

export default MainBox;