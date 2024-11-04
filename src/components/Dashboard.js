// src/components/Dashboard.js
import React, { useState } from 'react';
import { FaThermometerHalf, FaPowerOff, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const userInfo = { name: "김현", email: "mcz@mcz.com" };
    const [boiler, setBoiler] = useState({ temperature: 28, isOn: true });
    const [airConditioner, setAirConditioner] = useState({ temperature: 26, isOn: true });

    // Sample 알림 데이터
    const [alerts] = useState([
        { id: 1, message: "보일러 온도가 설정값을 초과했습니다.", time: "10분 전" },
        { id: 2, message: "에어컨 전원이 꺼졌습니다.", time: "1시간 전" },
        { id: 3, message: "보일러가 정상 작동 중입니다.", time: "3시간 전" }
    ]);

    const handleTemperatureChange = (device, value) => {
        const temperature = parseInt(value, 10);
        if (device === 'boiler') setBoiler((prev) => ({ ...prev, temperature }));
        if (device === 'airConditioner') setAirConditioner((prev) => ({ ...prev, temperature }));
    };

    const togglePower = (device) => {
        if (device === 'boiler') setBoiler((prev) => ({ ...prev, isOn: !prev.isOn }));
        if (device === 'airConditioner') setAirConditioner((prev) => ({ ...prev, isOn: !prev.isOn }));
    };

    return (
        <div className="dashboard-layout">
            {/* 왼쪽 섹션: 기본 정보와 알림 */}
            <div className="left-section">
                <div className="user-info card">
                    <h3>기본 정보</h3>
                    <p>이름: {userInfo.name}</p>
                    <p>이메일: {userInfo.email}</p>
                </div>

                <div className="alerts card">
                    <h3><FaBell /> 최근 알림</h3>
                    <ul className="alerts-list">
                        {alerts.map(alert => (
                            <li key={alert.id}>
                                <p>{alert.message}</p>
                                <span className="alert-time">{alert.time}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to="/alerts" className="view-all-link">모든 알림 보기</Link>
                </div>
            </div>

            {/* 오른쪽 섹션: 연결된 기기 및 상태 */}
            <div className="right-section">
                <div className="device-status card">
                    <h3>연결된 기기 및 상태</h3>

                    <div className="device">
                        <h4><FaThermometerHalf /> 보일러</h4>
                        <p>온도: {boiler.temperature}°C</p>
                        <input
                            type="range"
                            min="15"
                            max="30"
                            value={boiler.temperature}
                            onChange={(e) => handleTemperatureChange('boiler', e.target.value)}
                            className="slider"
                        />
                        <input
                            type="number"
                            min="15"
                            max="30"
                            value={boiler.temperature}
                            onChange={(e) => handleTemperatureChange('boiler', e.target.value)}
                            className="temperature-input"
                        />
                        <button onClick={() => togglePower('boiler')} className="power-button">
                            {boiler.isOn ? <FaPowerOff style={{ color: 'green' }} /> : <FaPowerOff style={{ color: 'red' }} />}
                            {boiler.isOn ? " 켜짐" : " 꺼짐"}
                        </button>
                    </div>

                    <div className="device">
                        <h4><FaThermometerHalf /> 에어컨</h4>
                        <p>온도: {airConditioner.temperature}°C</p>
                        <input
                            type="range"
                            min="18"
                            max="30"
                            value={airConditioner.temperature}
                            onChange={(e) => handleTemperatureChange('airConditioner', e.target.value)}
                            className="slider"
                        />
                        <input
                            type="number"
                            min="18"
                            max="30"
                            value={airConditioner.temperature}
                            onChange={(e) => handleTemperatureChange('airConditioner', e.target.value)}
                            className="temperature-input"
                        />
                        <button onClick={() => togglePower('airConditioner')} className="power-button">
                            {airConditioner.isOn ? <FaPowerOff style={{ color: 'green' }} /> : <FaPowerOff style={{ color: 'red' }} />}
                            {airConditioner.isOn ? " 켜짐" : " 꺼짐"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
