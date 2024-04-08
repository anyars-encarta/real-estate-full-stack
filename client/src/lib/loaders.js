import apiRequest from './apiRequest.js';

export const singlePageLoader = async ({ request, params }) => {
    const response = await apiRequest('/posts/' + params.id)

    return response.data;
}

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split('?')[1]
    const response = await apiRequest('/posts?' + query)

    return response.data;
}