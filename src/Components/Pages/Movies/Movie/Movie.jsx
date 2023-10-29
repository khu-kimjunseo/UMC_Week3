import { React, useState } from "react";
import PropTypes from "prop-types";
import * as M from "./Movie.style"
import Hover from "../Hover/Hover";

function Movie(props) {
    const [isHover, setHover] = useState(false)
    const PosterURL = `https://image.tmdb.org/t/p/w1280/${props.url}`;
    return (
        <M.MovieWrap onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <M.Poster src={PosterURL} alt={props.title}></M.Poster>
            <M.TextWrap>
                <M.Title>{props.title}</M.Title>
                <M.Rate>{props.rate}</M.Rate>
            </M.TextWrap>
            <Hover hover={isHover} title={props.title} overview={props.overview}></Hover>
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