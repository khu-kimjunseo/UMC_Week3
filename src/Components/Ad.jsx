import React from 'react'
import Adimg from '../img/Adimg.svg'

export default function Ad(props) {
    if (!props.ad_on){
        return null;
    }
    return (
    <div>
        <img src={Adimg} alt='Ad'></img>
    </div>
    )
}
