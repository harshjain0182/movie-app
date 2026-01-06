import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../slice/movieSlice';

export default function MovieCard({ movie }) {

    const dispatch = useDispatch();
    const {favorites} = useSelector(state => state.movies);
    const isFavorite = favorites.some(m => m.id === movie.id);

    const handleFavoriteClick = () => {
        if(isFavorite) {
            dispatch(removeFromFavorites(movie.id))
        }
        else{
            dispatch(addToFavorites(movie));
        }
    }

    return (
        <Grid item xs={4} mx={5}>
            <Card sx={{

                height: "100%",
                width: "25vw",
                display: "flex",
                flexDirection: "column",
                backgroundColor: '#1a1a1a',  // Modern dark background
                color: '#ffffff',  // White text color inheritance
                border: '2px solid',           // Enables border
                borderColor: '#333333ff',        // Subtle gray border
                borderRadius: 2
            }}>
                <CardMedia
                    sx={{ height: 200, width: "100%", objectFit: "contain" }}
                    image={movie.img_link}
                    alt={movie.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        Director By: {movie.director_name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        Witten By: {movie.writer_name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        Genre: {movie.genres}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
                        <FavoriteIcon 
                            sx={{color: isFavorite ? 'red' : 'white'}}
                        />
                    </IconButton>
                    <Typography gutterBottom variant="h7" component="div">
                        {movie.duration_in_mins} mins
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        {movie.imdb_rating}⭐
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        {movie.imdb_votings}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}