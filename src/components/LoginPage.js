// src/components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // 아이콘 추가
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>로그인</h2>
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input type="text" placeholder="아이디" className="auth-input" />
                </div>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" placeholder="비밀번호" className="auth-input" />
                </div>
                <button className="auth-button">로그인</button>
                <p className="auth-footer">
                    계정이 없으신가요? <Link to="/signup" className="auth-link">회원가입</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
