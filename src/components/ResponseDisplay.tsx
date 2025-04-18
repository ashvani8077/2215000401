import React from 'react';

interface NumberResponse {
    previousWindow: number[];
    currentWindow: number[];
    newValues: number[];
    average: number;
}

interface ResponseDisplayProps {
    responseData: NumberResponse | null;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ responseData }) => {
    if (!responseData) {
        return <div>No data available.</div>;
    }

    const { previousWindow, currentWindow, newValues, average } = responseData;

    return (
        <div className="response-display">
            <h2>Response Data</h2>
            <div>
                <h3>Previous Window:</h3>
                <p>{previousWindow.join(', ')}</p>
            </div>
            <div>
                <h3>Current Window:</h3>
                <p>{currentWindow.join(', ')}</p>
            </div>
            <div>
                <h3>New Values:</h3>
                <p>{newValues.join(', ')}</p>
            </div>
            <div>
                <h3>Average:</h3>
                <p>{average}</p>
            </div>
        </div>
    );
};

export default ResponseDisplay;