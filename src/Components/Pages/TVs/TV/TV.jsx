import { React } from "react";
import PropTypes from "prop-types";
import * as M from "../../../Entity.style"
import { useNavigate } from "react-router-dom";

function TV({ title, rate, url, overview }) {
    const navigate = useNavigate();
    const PosterURL = `https://image.tmdb.org/t/p/w1280/${url}`;
    const onClickImg = () => {
        navigate(`/tv/${title}`, {
            state: {
                id: title,
                img: PosterURL
            }
        })
    }
    return (
        <M.EntityWrap onClick={onClickImg}>
            <M.Poster src={PosterURL} alt={title}></M.Poster>
            <M.TextWrap>
                <M.Title>{title}</M.Title>
                <M.Rate>{rate}</M.Rate>
            </M.TextWrap>
        </M.EntityWrap>
    )
}

TV.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.number,
    overview: PropTypes.string
}

export default TV