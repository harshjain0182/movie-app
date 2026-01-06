import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieCard from '../../components/Movie card';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import Navbar from '../../components/Navbar';

export const Favorites = () => {

    const { favorites } = useSelector(state => state.movies);

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: 2
        }}>
            <h1>Your Favorites <FavoriteIcon sx={{ color: "#ef2424ff" }} /></h1>
            {favorites.length === 0 && <p>No Favorites Yet</p>}

            <Grid container spacing={2}>
                {
                    favorites.map(movie => (<MovieCard key={movie.id} movie={movie} />))
                }
            </Grid>
        </Box>

    )
}