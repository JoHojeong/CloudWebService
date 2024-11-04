// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="user-info">
                <h3>기본 정보</h3>
                <p>김현</p>
                <p>mcz@mcz.com</p>
            </div>
            <div className="device-status">
                <h3>연결된 기기 및 상태</h3>
                <div className="device">
                    <p>보일러 상태</p>
                    <p>온도: 28°C</p>
                    <p>난방: ON</p>
                </div>
                <div className="device">
                    <p>에어컨 상태</p>
                    <p>온도: 26°C</p>
                    <p>전원: ON</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
