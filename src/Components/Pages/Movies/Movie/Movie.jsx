import { React, useState } from "react";
import PropTypes from "prop-types";
import * as M from "./Movie.style"
import Hover from "../Hover/Hover";
import { useNavigate } from "react-router-dom";

function Movie({ title, rate, url, overview }) {
    const [isHover, setHover] = useState(false)
    const navigate = useNavigate();
    const PosterURL = `https://image.tmdb.org/t/p/w1280/${url}`;
    const onClickImg = () => {
        navigate(`/movie/${title}`, {
            state: {
                id: title,
                img: PosterURL
            }
        })
    }
    return (
        <M.MovieWrap onClick={onClickImg} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <M.Poster src={PosterURL} alt={title}></M.Poster>
            <M.TextWrap>
                <M.Title>{title}</M.Title>
                <M.Rate>{rate}</M.Rate>
            </M.TextWrap>
            <Hover hover={isHover} title={title} overview={overview}></Hover>
        </M.MovieWrap>
    )
}

Movie.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.number,
    overview: PropTypes.string
}

export default Movie