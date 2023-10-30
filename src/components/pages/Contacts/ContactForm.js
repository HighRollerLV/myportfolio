import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {isEmailValid} from './helpers';

function ContactForm() {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showInputError, setShowInputError] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setShowInputError(true);
            setTimeout(() => {
                setShowInputError(false);
            }, 3000);
            return;
        }

        if (!isEmailValid(form.email)) {
            setShowEmailError(true);
            setTimeout(() => {
                setShowEmailError(false);
            }, 3000);
            return;
        }

        emailjs
            .send('service_53xiic5', 'template_ysqpk37', form, '_T2f2T8HKD2kB9jU3')
            .then((result) => {
                console.log(result.text);
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });

        setForm({name: '', email: '', message: ''});
    };

    useEffect(() => {
        if (showSuccessMessage || showEmailError || showInputError) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowEmailError(false);
                setShowInputError(false);
            }, 3000);
        }
    }, [showSuccessMessage, showEmailError, showInputError]);

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 w-full">
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="col-span-2 w-3/4 px-4 py-2 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="col-span-2 w-3/4 px-4 py-2 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="10"
                className="col-span-2 w-3/4 px-4 py-2 text-lg placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
                type="submit"
                className="col-span-2 w-3/4 px-4 py-2 text-lg text-white bg-slate-500 rounded-lg hover-bg-slate-600 focus:outline-none"
            >
                Send Message
            </button>

            {showSuccessMessage &&
                <p className="bg-green-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">Message sent
                    successfully!</p>}
            {showEmailError &&
                <p className="bg-red-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">Please enter a valid
                    email address.</p>}
            {showInputError &&
                <p className="bg-red-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">Fill out all of the
                    input fields.</p>}
        </form>
    );
}

export default ContactForm;