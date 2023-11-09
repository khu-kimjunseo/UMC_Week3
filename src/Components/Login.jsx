import React, { useState } from 'react'
import * as L from './Loginbutton.style'
import { useNavigate } from 'react-router-dom'

export default function () {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [pwd, setPwd] = useState('')
    const [loginValid, setLoginValid] = useState(false)
    const navigate = useNavigate();
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com$/i;
    return (
        <div>
            <h1>이메일과 비밀번호를 입력해주세요</h1>
            <form>
                <label>이메일 주소</label>
                <input type='text' onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailValid(emailReg.test(e.target.value));
                    setLoginValid(emailValid && Boolean(pwd));
                }}></input>
                {!emailValid && <label style={{ 'color': 'red' }}>올바른 이메일을 입력해주세요.</label>}
                <label>비밀번호</label>
                <input type='password' onChange={(e) => {
                    setPwd(e.target.value);
                    setLoginValid(emailValid && Boolean(e.target.value));
                }}></input>
                <L.Login type='submit' active={emailValid && Boolean(pwd)} onClick={(e) => {
                    e.preventDefault();
                    if (loginValid) {
                        navigate('/');
                    }
                }}>확인</L.Login>

            </form>
        </div >
    )
}
