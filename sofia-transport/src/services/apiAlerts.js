import apiRequest from '@/services/apiRequest';

function getAlerts() {
    return apiRequest('/alerts', 'GET');
}

export default {
    getAlerts
};