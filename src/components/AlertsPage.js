// src/components/AlertsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AlertsPage.css';

function AlertsPage() {
    const alerts = [
        { id: 1, message: "보일러 온도가 설정값을 초과했습니다.", time: "10분 전" },
        { id: 2, message: "에어컨 전원이 꺼졌습니다.", time: "1시간 전" },
        { id: 3, message: "보일러가 정상 작동 중입니다.", time: "3시간 전" },
        // 더 많은 알림 데이터 추가
    ];

    return (
        <div className="alerts-page">
            <h2>모든 알림</h2>
            <ul className="alerts-list">
                {alerts.map(alert => (
                    <li key={alert.id}>
                        <p>{alert.message}</p>
                        <span className="alert-time">{alert.time}</span>
                    </li>
                ))}
            </ul>
            <Link to="/dashboard" className="back-link">대시보드로 돌아가기</Link>
        </div>
    );
}

export default AlertsPage;
