import { useEffect } from "react";
import { getMovies} from "../../api/movies";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies)
    console.log(movies);

    useEffect( () => {
        dispatch(getMovies());
    }, []);
    
    return(
        <Navbar/>
    )
}

export default Home;