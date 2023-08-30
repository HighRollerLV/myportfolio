import {UilMapMarker, UilUniversity} from "@iconscout/react-unicons";
import React from "react";

function requisites() {
    return (
        <div className="bg-white shadow-lg rounded-lg mt-6">
            <div className="px-4 py-4">
                <h2 className="text-2xl font-semibold text-gray-800">Requisites</h2>
                <div className="mt-4">
                    <div className="flex items-center">
                        <UilMapMarker size="20" className="text-gray-500"/>
                        <p className="ml-2 text-gray-600">
                            <span className="font-bold">Location:</span> Cēsis, Cēsu novads, Latvia
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <UilUniversity size="20" className="text-gray-500"/>
                        <p className="ml-2 text-gray-600">
                            <span className="font-bold">Bank:</span> SEB Banka
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <UilUniversity size="20" className="text-gray-500"/>
                        <p className="ml-2 text-gray-600">
                            <span className="font-bold">Bank Number:</span> XXXX-XXXX-XXXX-XXXX
                        </p>
                    </div>
                    <div className="flex items-center mt-2">
                        <UilUniversity size="20" className="text-gray-500"/>
                        <p className="ml-2 text-gray-600">
                            <span className="font-bold">SWIFT:</span> XXXXLVXX
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default requisites;
