"use client";

import { useEffect } from "react";

export default function GeneralError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error("😍", JSON.stringify(error.message));
    }, [error]);

    return (
        <div>
            <h2>{`Mensaje de error: ${error.message}`}</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
