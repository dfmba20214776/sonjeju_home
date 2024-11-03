import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

function LoginButton() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isAuthenticated) {
    return (
      <button
        onClick={handleLogout}
        className="text-gray-400 hover:text-white text-sm transition-colors"
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="text-gray-400 hover:text-white text-sm transition-colors"
    >
      관리자 로그인
    </button>
  );
}

export default LoginButton;