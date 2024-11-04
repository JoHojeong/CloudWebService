// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">ThrillionX</Link>
            </div>
            <nav className="header-nav">
                <Link to="/">홈</Link>
                <Link to="/dashboard">대시보드</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/login">로그인</Link>
            </nav>
        </header>
    );
}

export default Header;
