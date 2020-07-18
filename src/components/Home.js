import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getHomeData} from '../redux/actions/Home';
import Header from './Header';
import MovieCard from './MovieCard';
import '../css/Home.css';

const Home = (props) => {

const {searchMovie,homedata} = props;

  useEffect(() => {
    searchMovie({s:'Batman',apikey:'51c9514d'})
  }, []);

    console.log('props: ', props);
    return ( <div>
        <Header/>
        <div className="movies-main-container">
        {((homedata && homedata.data && homedata.data.Search) || []).map((movie) => {
return <MovieCard movie={movie} key={movie.imdbID} />
        })
        }
        </div>
    </div> );
}

const mapDispatchToProps = dispatch => {
    return {
      searchMovie: (data) => dispatch(getHomeData(data))
    }
  }
  
  const mapStateToProps = (state) => {
    return { homedata: state.HomeReducer };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
  