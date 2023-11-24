import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Components/Pages/Login/LoginSlice";
import MovieSlice from "./Components/Pages/Movies/MovieSlice";

const store = configureStore({
    reducer: {
        login: LoginSlice,
        // movie: MovieSlice,
    },
})
export default store;