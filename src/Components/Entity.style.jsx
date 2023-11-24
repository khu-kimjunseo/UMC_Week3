import styled from "styled-components";

export const EntityWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 240px;
    margin: 10px;

    position: relative;
    overflow: hidden;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
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