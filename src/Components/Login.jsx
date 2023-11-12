import React, { useState } from 'react'
import * as L from './Loginbutton.style'
import { useNavigate } from 'react-router-dom'

export default function (props) {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [pwd, setPwd] = useState('')
    const [loginValid, setLoginValid] = useState(false)
    const navigate = useNavigate();
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com$/i;
    return (
        <div>
            <h1>이메일과 비밀번호를 입력해주세요</h1>
            <L.Form>
                <L.InputWrap>
                    <L.Label>이메일 주소</L.Label>
                    <L.Input type='text' onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailValid(emailReg.test(e.target.value));
                        setLoginValid(emailValid && Boolean(pwd));
                    }}></L.Input>
                    <L.Label style={{ 'color': 'red' }} valid={emailValid}>올바른 이메일을 입력해주세요.</L.Label>
                </L.InputWrap>
                <L.InputWrap>
                    <L.Label>비밀번호</L.Label>
                    <L.Input type='password' onChange={(e) => {
                        setPwd(e.target.value);
                        setLoginValid(emailValid && Boolean(e.target.value));
                    }}></L.Input>
                </L.InputWrap>
                <L.Login type='submit' active={emailValid && Boolean(pwd)} onClick={(e) => {
                    e.preventDefault();
                    if (loginValid) {
                        navigate('/');
                        props.onLoggedIn();
                    }
                }}>확인</L.Login>

            </L.Form>
        </div >
    )
}
