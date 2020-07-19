import React from 'react';
import ToggleFavourite from './ToggleFavourite';
import Placeholder from '../assets/images/placeholer.jpg';
import '../css/Moviecard.css';

const MovieCard = (props) => {
    
    const {movie,history} = props;
    const seeMovieDetails = () => {
history.push(`/movie/${movie.imdbID}`)
    }

    return ( <div className="movieCard-main-wrapper">
    <div className="movieCard-top-wrapper"  onClick={seeMovieDetails}>
        <img src={movie.Poster === 'N/A' ? Placeholder : movie.Poster} alt={movie.Title} className="movieCard-image"/>
    </div>
    <div className="movieCard-bottom-wrapper">
        <div className="movieCard-fav-wrapper">
    <label className="movieCard-type">{movie.Type}</label> <ToggleFavourite movie={movie}/>
    </div>
        <label className="movieCard-title">{movie.Title}</label>
        <label className="movieCard-release-year">Release on {movie.Year}</label>
    </div>
    </div> );
}
 
export default MovieCard;