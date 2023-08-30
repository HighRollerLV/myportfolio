import React from 'react';
import Contact from "./Contacts/Contact";
import Requisites from "./Contacts/Requisites";

function Contacts() {
    return (
        <div
            className="bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-semibold text-slate-100">Contact Information</h1>
                {/* Contact Info Section */}
                <Contact/>
                {/* Requisites Section */}
                <Requisites/>
            </div>
        </div>
    );
}

export default Contacts;
