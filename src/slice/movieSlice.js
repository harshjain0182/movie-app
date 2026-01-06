import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchState: '',
    genres: [],
    ratings: [],
    favorites: [],
}

const movieSlice = createSlice({
    "name" : "movies",
    initialState,
    reducers : {
        setMovies : (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue : (state, action) =>  {
            state.searchState = action.payload;
        },
        setGenres : (state, action) => {
            state.genres = action.payload;
        },
        setRatings : (state, action) => {
            state.ratings = action.payload;
        },
        addToFavorites : (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites : (state, action) => {
            state.favorites = state.favorites.filter(m => action.payload !== m.id);
        }
    }
});

export const {setMovies, setSearchValue, setGenres, setRatings, addToFavorites, removeFromFavorites} = movieSlice.actions;

export default movieSlice.reducer;