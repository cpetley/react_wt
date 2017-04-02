import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';


import reducers from './reducers';
import Routes from './routes';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
  		<Routes history={browserHistory} />
  	</Provider>,
  document.getElementById('root')
);