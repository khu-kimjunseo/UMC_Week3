import { React } from "react";
import PropTypes from "prop-types";
import * as M from "../../../Entity.style"
import { useNavigate } from "react-router-dom";

function Movie({ title, rate, url, overview }) {
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
        <M.EntityWrap onClick={onClickImg}>
            <M.Hovering>
                <M.HoverTitle>{title}</M.HoverTitle>
                <M.Overview>{overview}</M.Overview>
            </M.Hovering>
            <M.Poster src={PosterURL} alt={title}></M.Poster>
            <M.TextWrap>
                <M.Title>{title}</M.Title>
                <M.Rate>{Math.round(rate*10)/10}</M.Rate>
            </M.TextWrap>
        </M.EntityWrap>
    )
}

Movie.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.number,
    overview: PropTypes.string
}

export default Movie