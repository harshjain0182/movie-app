import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MovieCard({ movie }) {
    return (
        <Grid item xs={12}>
            <Card sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <CardMedia
                    sx={{ height: 200 }}
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
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
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