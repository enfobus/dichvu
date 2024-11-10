import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

export const fetchServices = async () => {
    const response = await api.get('/services?populate=*');
    return response.data.data;
};
