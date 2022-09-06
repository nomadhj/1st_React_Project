import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './Context/authContext';
import store from './store';
import './styles/common.scss';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AuthContextProvider>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </AuthContextProvider>
  </Provider>
);
