import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img
                src="your-profile-picture.jpg" // Replace with your profile picture URL
                alt="Your Name"
                className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold">Your Name</h1>
            <h2 className="text-gray-600">Small Description</h2>
        </div>
    );
};

export default Home;