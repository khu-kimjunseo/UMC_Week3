import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLogin } from './LoginSlice';
import store from '../../../store';

export default function LoginControl(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin)
  return (
    <Provider store={store}>
      <div className='logincontrolwrap'>
        <button className='logincontrolbutton' onClick={(e) => {
          e.preventDefault();
          if (!isLogin) {
            navigate(`/login`);
          }
          else {
            dispatch(setIsLogin(false));
          }
        }}>{isLogin ? '로그아웃' : '로그인'}</button>
        <div style={{ "color": "white" }}>{isLogin ? '환영합니다!' : '로그인 해주세요!'}</div>
      </div>
    </Provider>
  )
}
