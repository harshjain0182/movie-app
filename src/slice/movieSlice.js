import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchState: ''
}

const movieSlice = createSlice({
    "name" : "movies",
    initialState,
    reducers : {
        setMovies : (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue : (state, action) =>  {
            state.searchState = action.payload
        }
    }
});

export const {setMovies, setSearchValue} = movieSlice.actions;

export default movieSlice.reducer;