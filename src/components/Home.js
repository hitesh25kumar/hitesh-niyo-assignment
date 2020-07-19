import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getHomeData} from '../redux/actions/Home';
import Layout from './Layout';
import MovieCard from './MovieCard';
import Loading from './Loading';
import NoResults from '../assets/images/no-results.png';
import '../css/Home.css';

const Home = (props) => {

const {searchMovie,homedata,history} = props;

  useEffect(() => {
    // searchMovie({s:'Batman',apikey:'51c9514d'})
  }, []);

    
    return ( 
      <Layout history={history}>
    <div className="home-main-container">
    {homedata && homedata.loading ?
          <Loading/> :
          homedata && homedata.data && homedata.data.Search && homedata.data.Search[0] ?
        <div className="movies-main-container">
          <React.Fragment>
        {((homedata && homedata.data && homedata.data.Search) || []).map((movie) => {
return <MovieCard movie={movie} key={movie.imdbID} history={history}/>
        })
        }
         </React.Fragment>
         </div>
         :
        <div className="no-results">
        <img src={NoResults} alt="No results found"/>
        </div>
}
    </div> 
    </Layout>);
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
  
  