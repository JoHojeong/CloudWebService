// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
    // 기본 정보
    const userInfo = {
        name: "김현",
        email: "mcz@mcz.com"
    };

    // 상태 관리
    const [boiler, setBoiler] = useState({
        temperature: 28,
        isOn: true
    });

    const [airConditioner, setAirConditioner] = useState({
        temperature: 26,
        isOn: true
    });

    // 온도 조절 함수
    const handleTemperatureChange = (device, value) => {
        if (device === 'boiler') {
            setBoiler((prevState) => ({ ...prevState, temperature: value }));
        } else if (device === 'airConditioner') {
            setAirConditioner((prevState) => ({ ...prevState, temperature: value }));
        }
    };

    // 전원 ON/OFF 토글 함수
    const togglePower = (device) => {
        if (device === 'boiler') {
            setBoiler((prevState) => ({ ...prevState, isOn: !prevState.isOn }));
        } else if (device === 'airConditioner') {
            setAirConditioner((prevState) => ({ ...prevState, isOn: !prevState.isOn }));
        }
    };

    return (
        <div className="dashboard">
            {/* 기본 정보 */}
            <div className="user-info">
                <h3>기본 정보</h3>
                <p>이름: {userInfo.name}</p>
                <p>이메일: {userInfo.email}</p>
            </div>

            {/* 보일러 상태 */}
            <div className="device-status">
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
                    <p>난방: {boiler.isOn ? "ON" : "OFF"}</p>
                    <button onClick={() => togglePower('boiler')}>
                        {boiler.isOn ? "Turn OFF" : "Turn ON"}
                    </button>
                </div>

                {/* 에어컨 상태 */}
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
                    <p>전원: {airConditioner.isOn ? "ON" : "OFF"}</p>
                    <button onClick={() => togglePower('airConditioner')}>
                        {airConditioner.isOn ? "Turn OFF" : "Turn ON"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
