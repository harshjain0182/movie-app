import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/Movie card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { getSearchedMovies } from "../../utils/searchedMovies";
const Home = () => {

    const dispatch = useDispatch();

    const { movies, searchState } = useSelector(state => state.movies)
    // const filterdMovies = getSearchedMovies(movies, searchState);


    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: '#1a1a1a',
                color: 'white',
                padding: 2
            }}>
                <Grid container spacing={2}>
                    {
                        movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    }

                </Grid>
            </Box>
        </div>
    )
}

export default Home;