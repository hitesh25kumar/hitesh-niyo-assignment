import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getHomeData} from '../redux/actions/Home';
import SearchImg from '../assets/images/search.svg';
import '../css/Header.css';

const Header = (props) => {
const [searchTxt,setsearchText] = useState('')
const [category,setcategory] = useState('')
const {searchMovie} = props;
console.log('searchTxt: ', searchTxt);
    const search = () => {
        console.log('search');
        searchMovie({s:searchTxt,apikey:'51c9514d',type:category})
    }
   const handleOnChange = (e) => {
    setsearchText(e.target.value);
    }

    const selectCategory = (e) => {
        setcategory(e.target.value);
        searchMovie({s:searchTxt,apikey:'51c9514d',type:e.target.value})
    }

    return ( <div className="header-container">
        <div className="search-container">
         <label htmlFor="search" className="search-label">Search Google:</label>
  <input type="search" id="search" name="search" onChange={handleOnChange}/>
  <button className="search-button" onClick={search}><img src={SearchImg}/></button>
  
   </div>
   <div className="filter-container">
   <label for="cars">Search by Category</label>
  <select name="category" id="category" onChange={selectCategory}>
  <option value="">All</option>
    <option value="movie">Movies</option>
    <option value="series">Series</option>
    <option value="episode">Episodes</option>
  </select>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
  