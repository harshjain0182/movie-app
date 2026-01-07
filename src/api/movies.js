import axios from "axios";
import { setMovies, setGenres, setRatings } from "../slice/movieSlice";

const BASE_URL =
  "https://83b05cfb-e74c-49f8-8ed4-09abdf015696-00-2mn4a00imlo4f.pike.replit.dev:3000/api/movies";

// 🔥 ONE API FOR MOVIES (WITH FILTERS)
export const fetchMovies = (filters) => async (dispatch) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: filters
    });
    dispatch(setMovies(data));
  } catch (err) {
    console.error(err);
  }
};

// 🔹 helpers
export const getAllGenres = () => async (dispatch) => {
  const { data } = await axios.get(`${BASE_URL}/genres`);
  dispatch(setGenres(data));
};

export const getAllRatings = () => async (dispatch) => {
  const { data } = await axios.get(`${BASE_URL}/ratings`);
  dispatch(setRatings(data));
};
