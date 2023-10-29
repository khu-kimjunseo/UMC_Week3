import React from "react"
import PropTypes from "prop-types"
import * as H from "./Hover.style"

function Hover(props) {
    return (
        <H.Hovering hover={props.hover}>
            <H.HoverTitle>{props.title}</H.HoverTitle>
            <H.Overview>{props.overview}</H.Overview>
        </H.Hovering>
    )
}

Hover.propTypes = {
    hover: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string
}

export default Hover