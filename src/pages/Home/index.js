import { useEffect } from "react";
import { fetchMovies, getAllGenres, getAllRatings } from "../../api/movies";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/Movie card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Home = () => {

    const dispatch = useDispatch();

    const { movies, filters } = useSelector(state => state.movies)


    useEffect(() => {
        dispatch(fetchMovies(filters));
    }, [filters]);

    useEffect(() => {
        dispatch(getAllGenres());
        dispatch(getAllRatings());
    },[]);

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