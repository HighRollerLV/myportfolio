import React, {useEffect, useState} from 'react';

function SuccessMessage() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (showSuccessMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage]);

    return (
        <div>
            {showSuccessMessage && (
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">
                    Your message has been sent successfully!
                </div>
            )}
        </div>
    );
}

export default SuccessMessage;