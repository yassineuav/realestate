import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a9ad4a87e5msh0dcb84359eb45afp1a42c9jsnb9011c2d4e0a'
        }
    });
    return data;
}
