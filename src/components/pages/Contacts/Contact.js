import {UilEnvelope, UilPhone} from "@iconscout/react-unicons";
import React from "react";

function Contacts() {
    return (
        <div className="bg-white shadow-lg rounded-lg mt-6">
            <div className="px-4 py-4">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Info</h2>
                <div className="mt-4">
                    <div className="flex items-center">
                        <UilEnvelope size="20" className="text-gray-500"/>
                        <span className="ml-2 text-gray-600">Email: ralfsdamb@gmail.com</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <UilPhone size="20" className="text-gray-500"/>
                        <span className="ml-2 text-gray-600">Phone: +371 29477449</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contacts;