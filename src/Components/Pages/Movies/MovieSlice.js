import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // page: 1,
    movies: [],
    movies2: [],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        // setPage: (state, action) => {
        //     state.page = action.payload;
        // },
        setMovies: (state, action) => {
            // state.movies = action.payload
            // state.movies.push(...action.payload)
            state.movies = [...state.movies, ...action.payload]
        },
        setMovies2: (state, action) => {
            state.movies = action.payload
        },
    }
})

export const {
    // setPage,
    setMovies,
    setMovies2,
} = movieSlice.actions;

export default movieSlice.reducer;