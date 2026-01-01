import axios from 'axios';
import { setMovies } from '../slice/movieSlice';

export const getMovies = () => async dispatch => {
    const url = "https://83b05cfb-e74c-49f8-8ed4-09abdf015696-00-2mn4a00imlo4f.pike.replit.dev:3000/api/movies";

    try{
        const {data}= await axios.get(url);
        dispatch(setMovies(data));
    }
    catch(err){
        console.log("Not able to fetch data", err);
    }
}