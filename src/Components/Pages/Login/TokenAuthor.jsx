import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store from '../../../store'
import axios from 'axios'

export default function TokenAuthor() {
    const userToken = useSelector(state => state.login.token);
    const authorToken = async () => {
        console.log('Authorizing');
        const endpoint = 'http://localhost:5000/user/payload';
        try {
            const res = await axios.get(endpoint, {
                headers: {
                    'Authorization': userToken,
                }
            })
            console.log(res)
            alert(res.data.result.name)
        } catch (error) {
            console.error(error);
            alert('검증에 실패했습니다.')
        }
    }
    return (
        <Provider store={store}>
            <div className='logincontrolwrap'>
                <button className='logincontrolbutton' onClick={(e) => {
                    authorToken();
                }}>토큰 검증</button>
            </div>
        </Provider>
    )
}
