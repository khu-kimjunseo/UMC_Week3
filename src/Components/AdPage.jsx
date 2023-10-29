import React, { useState } from 'react'
import Ad from './Ad'

export default function AdPage() {
    const [visible, setVisible] = useState(true);

  return (
    <div>
        <button className='toggle' onClick={(e) => {setVisible(!visible)}}>
            {visible ? '광고안보기' : '광고보기'}
        </button>
        <Ad ad_on={visible}></Ad>
    </div>
  )
}
