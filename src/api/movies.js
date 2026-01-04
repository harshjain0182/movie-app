import axios from 'axios';
import { setMovies, setGenres } from '../slice/movieSlice';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';

const BaseUrl = "https://83b05cfb-e74c-49f8-8ed4-09abdf015696-00-2mn4a00imlo4f.pike.replit.dev:3000/api/movies";

export const getMovies = () => async dispatch => {

    try {
        const { data } = await axios.get(BaseUrl);
        dispatch(setMovies(data));
    }
    catch (err) {
        return err;
    }
}

export const getMoviesBySearch = (value) => async dispatch => {
    const url = BaseUrl + "/search"

    try {
        const { data } = await axios.get(url, {
            params: {
                search: value
            }
        });
        dispatch(setMovies(data));
    } catch (err) {
        return err;
    }
}

export const getALlGenres = () => async dispatch => {
    const url = BaseUrl + '/genres'
    try {
        const { data } = await axios.get(url);
        dispatch(setGenres(data));
    }
    catch (err) {
        return err;
    }
}

export const getMovieByGenre = (value) => async dispatch => {
    const url = BaseUrl + '/genre';

    try {
        const { data } = await axios.get(url, {
            params: {
                genre: value
            }
        });
        dispatch(setMovies(data));
    } catch (err) {
        return err;
    }

}