import React from 'react';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';

function App() {
    return (
        <div className="flex">
            <Sidebar />
            <CardGrid />
        </div>
    );
}

export default App;
