import axios from 'axios';

const API_URL = 'http://localhost:5000/api/numbers';

export const fetchNumbers = async (type: string) => {
    try {
        const response = await axios.get(`${API_URL}?type=${type}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching numbers: ' + error.message);
    }
};