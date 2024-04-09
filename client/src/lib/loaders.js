import { defer } from 'react-router';
import apiRequest from './apiRequest.js';

export const singlePageLoader = async ({ request, params }) => {
    const response = await apiRequest('/posts/' + params.id)

    return response.data;
}

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split('?')[1]
    const postPromise = apiRequest('/posts?' + query)

    return defer({
        postResponse: postPromise
    })
}