import React from 'react'
import { useLocation } from 'react-router-dom'
import * as D from '../../../Detail.style'

export default function MovieDetail() {
    const location = useLocation();
    const title = location.state.id;
    const img = location.state.img;
    return (
        <D.Detail>
            <D.DetailPost src={img} alt={title}></D.DetailPost>
            <D.DetailTitle>{title}</D.DetailTitle>
        </D.Detail>
    )
}
