import axios from 'axios';
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import store from '../../../store';
import { setIsLogin, setName } from './LoginSlice';

export default function KakaoRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get("code");
  const fetchData = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/kakao?code=${code}`)
      console.log(res.data);
      dispatch(setName(res.data.result.name))
      dispatch(setIsLogin(true))
      navigate("/");
    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(()=>{
    console.log(code);
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <Provider store={store}>
      <BeatLoader></BeatLoader>
    </Provider>
  )
}
