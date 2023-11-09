import styled from "styled-components";

export const Login = styled.button`
    width: 150px;
    height: 30px;

    border: none;
    border-radius: 10px;
    font-size: 18px;
    color: white;
    background-color: ${(props) => props.active ? '#022540' : '#DADADA'};
    cursor: ${(props) => props.active ? 'pointer' : 'default'};
`