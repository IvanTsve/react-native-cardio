import React from 'react';
import { ScrollView, Text } from 'react-native';
import AlertsService from '@/services/apiAlerts';
import { useEffect, useState } from 'react';
import RenderHTML from 'react-native-render-html';

export default function Alerts() {
    const [alertsArr, setAlertsArr] = useState([]);
    useEffect(() => {
        fetchAlerts();
    }, [])

    async function fetchAlerts() {
        const r = await AlertsService.getAlerts();

        const text = typeof r.data === "string" ? r.data : String(r.data);

        const matches = [...text.matchAll(/<p[\s\S]*?<\/p>/g)];

        const alerts = matches.map((m, i) => ({
            id: i,
            html: m[0]
        }));

        setAlertsArr(alerts);
    }
    return (
        <ScrollView>
            {alertsArr.length == 0 ? <Text>No alerts</Text> : alertsArr.map((alert, index) => (
                <RenderHTML
                    key={index}
                    contentWidth={100}
                    source={{ html: alert.html }}
                    tagsStyles={{
                        p: { fontSize: 16, marginBottom: 10 },
                        span: { fontSize: 14 },
                        strong: { fontWeight: 'bold' },
                    }}
                />
            ))}
        </ScrollView>
    )
}