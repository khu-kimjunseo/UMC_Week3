import * as H from "./Hover.style"

function Hover(props) {
    return (
        <H.Hovering hover={props.hover}>
            <H.HoverTitle>{props.title}</H.HoverTitle>
            <H.Overview>{props.overview}</H.Overview>
        </H.Hovering>
    )
}

export default Hover