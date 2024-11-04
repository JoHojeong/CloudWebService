// src/components/Dashboard.js
import React, { useState } from 'react';
import { FaThermometerHalf, FaPowerOff } from 'react-icons/fa'; // 아이콘 추가
import './Dashboard.css';

function Dashboard() {
    const userInfo = { name: "김현", email: "mcz@mcz.com" };
    const [boiler, setBoiler] = useState({ temperature: 28, isOn: true });
    const [airConditioner, setAirConditioner] = useState({ temperature: 26, isOn: true });

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
        <div className="dashboard-container">
            {/* 사용자 정보 카드 */}
            <div className="user-info card">
                <h3>기본 정보</h3>
                <p>이름: {userInfo.name}</p>
                <p>이메일: {userInfo.email}</p>
            </div>

            {/* 기기 상태 정보 카드 */}
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
    );
}

export default Dashboard;
