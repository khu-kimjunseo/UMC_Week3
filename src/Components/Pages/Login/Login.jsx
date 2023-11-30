import React, { useState } from 'react'
import * as L from './Loginbutton.style'
import { useNavigate } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../../../store'
import { setID, setPw, setToken, setIsLogin } from './LoginSlice'
import axios from 'axios'

export default function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fetching, setFetching] = useState(false);

    const userId = useSelector((state) => state.login.userId)
    const userPw = useSelector((state) => state.login.userPw)

    const fetchData = async () => {
        try {
            // 로그인
            console.log('Log in');
            setFetching(true)
            setTimeout(() => setFetching(false), 1500)
            let endpoint = 'http://localhost:8000/user/login';
            const requestBody = {
                id: userId,
                pw: userPw,
            };
            const res = await axios.post(endpoint, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(res.data);
            dispatch(setToken(res.data.result.AccessToken));
            window.localStorage.setItem('token', res.data.result.AccessToken)
            dispatch(setIsLogin(true));
            navigate('/');
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }

    const handleKakaoLogin = () => {
        const REST_API_KEY = process.env.REACT_APP_KAKAO
        const K_REDIRECT_URI = `http://localhost:3000/oauth`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
        console.log(kakaoURL);
        window.location.href = kakaoURL;
    }
    
    return (
        <Provider store={store}>
            <div style={{marginTop: "5vh", marginLeft: "5vw"}}>
                <h1 style={{marginLeft: "2%"}}>아이디와 비밀번호를 입력해주세요</h1>
                <L.Form>
                    <L.InputWrap>
                        <L.Label>아이디</L.Label>
                        <L.Input type='text' onChange={(e) => {
                            dispatch(setID(e.target.value))
                        }}></L.Input>
                    </L.InputWrap>
                    <L.InputWrap>
                        <L.Label>비밀번호</L.Label>
                        <L.Input type='password' onChange={(e) => {
                            dispatch(setPw(e.target.value));
                        }}></L.Input>
                    </L.InputWrap>
                    <L.Login type='submit' onClick={(e) => {
                        e.preventDefault();
                        if (!fetching) {
                            fetchData();
                        }
                    }
                    }>{fetching ? '로딩중' : '확인'}</L.Login>
                </L.Form>
                <L.KakaoBtn onClick={handleKakaoLogin}>카카오 로그인</L.KakaoBtn>
            </div>
        </Provider>
    )
}
