import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import rootSaga from './redux/sagas';
import reducer from './redux/reducers';
import './App.css';
import Home from './components/Home';
import MyFavourites from './components/MyFavourites';
import MovieDetails from './components/MovieDetails';

const sagaMiddleware = createSagaMiddleware();
const Logger = process.env.NODE_ENV !== 'production' ? (sagaMiddleware, logger) : (sagaMiddleware)
const store = createStore(
  reducer, applyMiddleware(sagaMiddleware,Logger)
);


sagaMiddleware.run(rootSaga);

const favouriteMovies = localStorage.getItem('favourites')
if(favouriteMovies){
  
  const data = JSON.parse(favouriteMovies);
store.dispatch({ type:'INITIAL_FAVOURITES',data:data})
}


function App() {
  return (
    <Provider store={store}>
    <Router>
  <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/favourites" component={MyFavourites} />
        <Route exact={true} path="/movie/:id" component={MovieDetails} />
        <Route path="*">
          <div>404 Page not found</div>
        </Route>
      </Switch>
      
    </Router>
  </Provider>
  );
}


export default App;
