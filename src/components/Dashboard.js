// src/components/Dashboard.js
import React, { useState } from 'react';
import Alerts from './Alerts';
import './Dashboard.css';

function Dashboard() {
    const userInfo = { name: "김현", email: "mcz@mcz.com" };
    const [boiler, setBoiler] = useState({ temperature: 28, isOn: true });
    const [airConditioner, setAirConditioner] = useState({ temperature: 26, isOn: true });

    // 슬라이더와 텍스트 입력 필드 모두 온도 조절이 가능하도록 수정
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
        <div className="dashboard">
            <div className="left-section">
                <div className="user-info card">
                    <h3>기본 정보</h3>
                    <p>이름: {userInfo.name}</p>
                    <p>이메일: {userInfo.email}</p>

                    <div className="alerts-section">
                        <h4>알림 목록</h4>
                        <Alerts />
                    </div>
                </div>
            </div>

            <div className="right-section">
                <div className="device-status card">
                    <h3>연결된 기기 및 상태</h3>

                    <div className="device">
                        <h4>보일러</h4>
                        <p>온도: {boiler.temperature}°C</p>
                        <input
                            type="range"
                            min="15"
                            max="30"
                            value={boiler.temperature}
                            onChange={(e) => handleTemperatureChange('boiler', e.target.value)}
                        />
                        <input
                            type="number"
                            min="15"
                            max="30"
                            value={boiler.temperature}
                            onChange={(e) => handleTemperatureChange('boiler', e.target.value)}
                            className="temperature-input"
                        />
                        <p>난방: {boiler.isOn ? "ON" : "OFF"}</p>
                        <button onClick={() => togglePower('boiler')}>
                            {boiler.isOn ? "Turn OFF" : "Turn ON"}
                        </button>
                    </div>

                    <div className="device">
                        <h4>에어컨</h4>
                        <p>온도: {airConditioner.temperature}°C</p>
                        <input
                            type="range"
                            min="18"
                            max="30"
                            value={airConditioner.temperature}
                            onChange={(e) => handleTemperatureChange('airConditioner', e.target.value)}
                        />
                        <input
                            type="number"
                            min="18"
                            max="30"
                            value={airConditioner.temperature}
                            onChange={(e) => handleTemperatureChange('airConditioner', e.target.value)}
                            className="temperature-input"
                        />
                        <p>전원: {airConditioner.isOn ? "ON" : "OFF"}</p>
                        <button onClick={() => togglePower('airConditioner')}>
                            {airConditioner.isOn ? "Turn OFF" : "Turn ON"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
