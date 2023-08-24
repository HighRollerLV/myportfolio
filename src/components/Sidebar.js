import React from 'react';

const Sidebar = () => {
    return (
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
            <div className="flex items-center justify-center h-14 border-b">
                <img src="/media/logoX.jpg" alt="Logo" className="w-18 h-18 object-contain" />
            </div>
        </div>
    );
};

export default Sidebar;