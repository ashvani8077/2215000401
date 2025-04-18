import React, { useState } from 'react';

const NumberSelector: React.FC<{ onSelect: (type: string) => void }> = ({ onSelect }) => {
    const [selectedType, setSelectedType] = useState<string>('prime');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const type = event.target.value;
        setSelectedType(type);
        onSelect(type);
    };

    return (
        <div>
            <label htmlFor="number-type">Select Number Type: </label>
            <select id="number-type" value={selectedType} onChange={handleChange}>
                <option value="prime">Prime</option>
                <option value="fibonacci">Fibonacci</option>
                <option value="even">Even</option>
                <option value="random">Random</option>
            </select>
        </div>
    );
};

export default NumberSelector;