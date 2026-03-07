import React from 'react';
import { View, Text } from 'react-native';
import AlertsService from '@/services/Alerts';
import { useEffect, useState } from 'react';

export default function Alerts() {
    const [alertsArr, setAlertsArr] = useState([]);
    useEffect(() => {
        fetchAlerts();
    }, [])

    async function fetchAlerts() {
        let ignore = false;
        setAlertsArr([]);
        const r = await AlertsService.getAlerts();
        if (!ignore) {
            setAlertsArr(r.data);
        }
        return () => {
            ignore = true;
        };
    }
    return (
        <View>
            <Text>{JSON.stringify(alertsArr)}</Text>
        </View>
    )
}