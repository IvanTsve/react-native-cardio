import axios from 'axios';

const API_URL = 'https://gtfs.sofiatraffic.bg/api/v1';

export default function apiRequest(url, method, data = null) {
    console.log(API_URL+url);

    return axios.request({
        url: API_URL+url,
        method: method,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}