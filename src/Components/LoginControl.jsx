import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const navigate = useNavigate();
  return (
    <div className='logincontrolwrap'>
      {/* 7주차 */}
      <button className='logincontrolbutton' onClick={() => {
        navigate(`/login`);
        setIsLoggedIn(!isLoggedIn);
      }}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
      <div style={{ "color": "white" }}>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</div>
    </div>
  )
}
