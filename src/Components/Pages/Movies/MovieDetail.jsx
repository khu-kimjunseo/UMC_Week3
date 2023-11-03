import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetail() {
    const location = useLocation();

    const title = location.state.id;
    const img = location.state.img;
    return (
        <div>
            <img src={img} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
