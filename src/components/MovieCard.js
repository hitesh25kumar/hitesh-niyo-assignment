import React, { Component } from 'react';
import Placeholder from '../assets/images/placeholer.jpg';
import '../css/Moviecard.css';

const MovieCard = (props) => {
    console.log('props: ', props);
    const {movie} = props;
    return ( <div className="movieCard-main-wrapper">
    <div className="movieCard-top-wrapper">
        <img src={movie.Poster === 'N/A' ? Placeholder : movie.Poster} alt={movie.Title} className="movieCard-image"/>
    </div>
    <div className="movieCard-bottom-wrapper">
        <label className="movieCard-title">{movie.Title}</label>
        <label className="movieCard-release-year">{movie.Year}</label>
    </div>
    </div> );
}
 
export default MovieCard;