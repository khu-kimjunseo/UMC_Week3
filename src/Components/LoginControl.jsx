import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl(props) {
  const navigate = useNavigate();
  return (
    <div className='logincontrolwrap'>
      <button className='logincontrolbutton' onClick={(e) => {
        e.preventDefault();
        if (!props.isLoggedIn) {
          navigate(`/login`);
        }
        else {
          props.onLoggedOut();
        }
      }}>{props.isLoggedIn ? '로그아웃' : '로그인'}</button>
      <div style={{ "color": "white" }}>{props.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</div>
    </div>
  )
}
