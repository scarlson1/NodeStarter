import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
// import reducers from './reducers';
import authReducer from './reducers/authReducer';
import blogsReducer from './reducers/blogsReducer';

import axios from 'axios';
window.axios = axios;

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsReducer,
  },
});

// Changed for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector('#root')
// );
