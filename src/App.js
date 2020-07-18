import React, { Suspense, lazy } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import rootSaga from './redux/sagas';
import reducer from './redux/reducers';
import './App.css';
import Loading from './components/Loading';
import Home from './components/Home';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer, applyMiddleware(sagaMiddleware, logger)
);


sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Suspense fallback={<div className="component-loader"><Loading/></div>}>
  <Switch>
        <Route exact={true} path="/" component={Home} />
        
        <Route path="*">
          <div>404 Page not found</div>
        </Route>
      </Switch>
</Suspense>
      
    </Router>
  </Provider>
  );
}

export default App;
