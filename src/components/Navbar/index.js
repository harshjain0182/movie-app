import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectorComponent from '../Selector';
import { IconButton } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { getALlGenres, getMoviesBySearch, getAllRating } from '../../api/movies';
import { debounce } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALlGenres());
    dispatch(getAllRating());
  }, []);
  const { genres, ratings } = useSelector(state => state.movies);


  const onSearchChange = debounce((e) => {
    dispatch(getMoviesBySearch(e.target.value));
  }, 500);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: 1.5 }}>
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Just Watch
          </Typography>
          <Search onChange={onSearchChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>

            <SelectorComponent name='Genres' value={genres} />
            <SelectorComponent name='Rating' value={ratings} />
            <Link to={"/favorites"} style={{textDecoration: "none"}} >
              <IconButton aria-label="add to favorites" sx={{ color: "#ef2424ff" }}>
                <FavoriteIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}