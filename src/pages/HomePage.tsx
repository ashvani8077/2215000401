import React, { useState } from 'react';
import NumberSelector from '../components/NumberSelector';
import ResponseDisplay from '../components/ResponseDisplay';
import { fetchNumbers } from '../services/apiService';

const HomePage: React.FC = () => {
    const [numberType, setNumberType] = useState<string>('prime');
    const [responseData, setResponseData] = useState<any>(null);

    const handleFetchNumbers = async () => {
        const data = await fetchNumbers(numberType);
        setResponseData(data);
    };

    return (
        <div>
            <h1>Number Fetcher</h1>
            <NumberSelector selectedType={numberType} onTypeChange={setNumberType} />
            <button onClick={handleFetchNumbers}>Fetch Numbers</button>
            {responseData && <ResponseDisplay data={responseData} />}
        </div>
    );
};

export default HomePage;