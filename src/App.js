import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Timeline from './components/pages/Timeline';
import Contact from './components/pages/Contact';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/education" element={<Education />}/>
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/timeline" element={<Timeline />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
