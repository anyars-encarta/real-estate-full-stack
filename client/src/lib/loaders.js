import apiRequest from './apiRequest.js';

export const singlePageLoader = async ({ request, params }) => {
    const response = await apiRequest('/posts/' + params.id)

    return response.data;
}