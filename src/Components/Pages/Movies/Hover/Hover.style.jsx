import styled from "styled-components";

export const Hovering = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, 0.7);

    color: rgba(255, 255, 255, 0.7);
    font-size: 10px;
    overflow: auto;

    opacity: ${(props) => props.hover ? 1 : 0};
`;

export const HoverTitle = styled.div`
    padding: 10%;
`;

export const Overview = styled.div`
    padding-left: 10%;
    padding-right: 10%;
`;