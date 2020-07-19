import { combineReducers } from 'redux';
import { HomeReducer,MovieDetailsReducer } from './Home';
import {FavouriteReducer} from './Favourite';

export default combineReducers({
  HomeReducer,
  FavouriteReducer,
  MovieDetailsReducer
});