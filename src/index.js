import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducers'
import thunk from 'redux-thunk'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


// const loggerMiddleware = store => next => action => {
//   const result = next(action) 
//   console.log(store.getState())
//   return result
// }

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {app}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
