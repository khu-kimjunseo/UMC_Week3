import React, { useState } from 'react'
import Ad from './Ad'

export default function AdPage() {
    const [visible, setVisible] = useState(true);

  return (
    <div>
        <Ad ad_on={visible}></Ad>
        <button className='toggle' onClick={(e) => {setVisible(!visible)}}>
            {visible ? '광고안보기' : '광고보기'}
        </button>
    </div>
  )
}
