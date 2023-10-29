import React from 'react'

export default function Ad(props) {
    if (!props.ad_on){
        return null;
    }
    return (
    <div>
        <img src='../img/Adimg.svg' alt='Ad'></img>
    </div>
    )
}
