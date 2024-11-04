// src/components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>로그인</h2>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button>로그인</button>
                <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;
