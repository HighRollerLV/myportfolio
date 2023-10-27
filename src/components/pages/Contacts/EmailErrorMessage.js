import React, {useEffect, useState} from 'react';

function EmailErrorMessage() {
    const [showEmailError, setShowEmailError] = useState(false);

    useEffect(() => {
        if (showEmailError) {
            setTimeout(() => {
                setShowEmailError(false);
            }, 3000);
        }
    }, [showEmailError]);

    return (
        <div>
            {showEmailError && (
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg absolute top-4 right-4">
                    Please enter a valid email address.
                </div>
            )}
        </div>
    );
}

export default EmailErrorMessage;