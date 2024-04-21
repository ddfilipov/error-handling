"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function GeneralError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("😍",JSON.stringify(error.message));
    }, [error]);

    return (
        <div>
            <h2>{`Here's your error:777 ${error.message}`}</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try againnn
            </button>
        </div>
    );
}
