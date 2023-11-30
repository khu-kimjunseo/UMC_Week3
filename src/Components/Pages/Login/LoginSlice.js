import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userPw: null,
    token: null,
    userName: null,
    isLogin: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setID: (state, action) => {
            state.userId = action.payload;
        },
        setPw: (state, action) => {
            state.userPw = action.payload;
        },
        setName: (state, action) => {
            state.userName = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        }
    },
});

export const {
    setID,
    setPw,
    setName,
    setToken,
    setIsLogin,
} = loginSlice.actions;

export default loginSlice.reducer;