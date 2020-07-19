import React from 'react';
import {connect} from 'react-redux';
import Layout from './Layout';
import MovieCard from './MovieCard';
import Noresults from '../assets/images/no-results.gif';
import '../css/favourite.css';

const MyFavourites = (props) => {
    const {history,favourites} = props;
    
    return ( 
    <Layout history={history}>
  <div className="favourites-main-container">
    {favourites && favourites[0] ?
  <div className="favourites-inner-container">
    {(favourites || []).map((movie) => {
return <MovieCard movie={movie} key={movie.imdbID} history={history}/>
        })
        }
    </div> 
    :
    <img src={Noresults} className="no-favourites" alt="No Favourite movies found"/>
      }
    </div> 
    </Layout> );
}

  
  const mapStateToProps = (state) => {
    return { favourites: state.FavouriteReducer };
  };
  
  export default connect(mapStateToProps)(MyFavourites);