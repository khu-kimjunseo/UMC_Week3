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

    opacity: 0;
`;

export const EntityWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 240px;
    margin: 10px;

    position: relative;
    overflow: hidden;

    &:hover ${Hovering} {
        opacity: 1;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: 190px;
`;

export const TextWrap = styled.div`
    background-color: #373b69;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    flex-grow: 1;
    padding: 5%;

    color: white;
    font-size: 10px;
`;

export const Title = styled.div`
    width: 80%;
`;

export const Rate = styled.div`
    width: 20%;
    text-align: end;
`;

export const HoverTitle = styled.div`
    padding: 10%;
`;

export const Overview = styled.div`
    padding-left: 10%;
    padding-right: 10%;
`;