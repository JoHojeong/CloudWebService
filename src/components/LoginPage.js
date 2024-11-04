// src/components/LoginPage.js
import React from 'react';

function LoginPage() {
    return (
        <div className="login-container">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button>로그인</button>
        </div>
    );
}

export default LoginPage;
