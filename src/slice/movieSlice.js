import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchState: '',
    genres: [],
    ratings: [],
    favorites: [],
    filters: {
        search: '',
        genre: '',
        rating: ''
    }
}

const movieSlice = createSlice({
    "name" : "movies",
    initialState,
    reducers : {
        setMovies : (state, action) => {
            state.movies = action.payload;
        },
        setGenres : (state, action) => {
            state.genres = action.payload;
        },
        setRatings : (state, action) => {
            state.ratings = action.payload;
        },
        setFilter: (state, action) => {
            const {key, value} = action.payload;
            state.filters[key] = value;
        },
        addToFavorites : (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites : (state, action) => {
            state.favorites = state.favorites.filter(m => action.payload !== m.id);
        }
    }
});

export const {setMovies, setGenres, setRatings, addToFavorites, removeFromFavorites, setFilter} = movieSlice.actions;

export default movieSlice.reducer;