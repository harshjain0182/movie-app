export const getSearchedMovies = (movies, searchState) => {
    
    const filteredMovies = searchState.length > 0 ? movies.filter(movie => movie.name.toLowerCase().includes(searchState.toLowerCase()) || movie.director_name.toLowerCase().includes(searchState.toLowerCase()) || movie.writer_name.toLowerCase().includes(searchState.toLowerCase())): movies;

    return filteredMovies;
}