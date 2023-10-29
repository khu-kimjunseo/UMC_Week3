import React, { useState } from 'react'

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoginClick(e) {
        setIsLoggedIn(!isLoggedIn);
    }
    
    function handleLogoutClick(e) {
        setIsLoggedIn(!isLoggedIn);        
    }

  return (
    <div className='loginconrolwrap'>
        {isLoggedIn ?
        <button className='logincontrolbutton' onClick={handleLogoutClick}>로그아웃</button> :
        <button className='logincontrolbutton' onClick={handleLoginClick}>로그인</button>
        }
        <div style={{"color":"white"}}>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</div>
    </div>
  )
}
