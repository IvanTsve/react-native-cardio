import apiRequest from '@/services/apiRequest';

function getVehiclePositions() {
    return apiRequest('/vehicle-positions', 'GET');
}

export default {
    getVehiclePositions
}