import styled from "styled-components";

export const Login = styled.button`
    
    height: 40px;

    border: none;
    border-radius: 20px;
    font-size: 18px;
    color: white;
    background-color: #022540;
    cursor: pointer;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 2%;
    margin-left: 2%; 
`

export const InputWrap = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    margin-bottom: 5px;
    opacity: ${(props) => props.valid ? 0 : 1}
`
export const Input = styled.input`
    padding: 20px;
    height: 40px;
    border-radius: 10px;
    border: solid 3px #cccccc;
    &:focus {
        border-color: black;
        outline: none;
    }
`

export const KakaoBtn = styled(Login)`
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    width: 50%;
    background-color: rgb(250, 233, 78);
    color: black;
`