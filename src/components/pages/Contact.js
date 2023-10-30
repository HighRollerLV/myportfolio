import React from 'react';
import ContactForm from './Contacts/ContactForm';
import SuccessMessage from './Contacts/SuccessMessage';
import EmailErrorMessage from './Contacts/EmailErrorMessage';
import InputErrorMessage from './Contacts/InputErrorMessage';

function Contacts() {
    return (
        <div
            className="bg-gradient-to-r from-slate-500 via-stone-400 to-gray-700 background-animate min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <SuccessMessage/>
            <EmailErrorMessage/>
            <InputErrorMessage/>
            <div className="max-w-2xl mx-auto flex flex-col gap-20 h-screen">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-100">Contact Me</h1>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-row w-full text-left">
                        <h2 className="text-2xl font-semibold text-slate-100">Enter your information to contact me:</h2>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
