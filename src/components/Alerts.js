import React, { useEffect, useState } from 'react';

function Alerts() {
    const [alerts, setAlerts] = useState([]);

    // 10초마다 알림 데이터 조회
    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await fetch('https://api-id.execute-api.region.amazonaws.com/prod/alerts');
                const data = await response.json();
                setAlerts(data);
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };

        fetchAlerts();
        const interval = setInterval(fetchAlerts, 10000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
    }, []);

    return (
        <div className="alerts">
            <h2>알림 목록</h2>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert.AlertId}>
                        <strong>{new Date(alert.Timestamp).toLocaleString()}</strong>: {alert.Message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Alerts;
