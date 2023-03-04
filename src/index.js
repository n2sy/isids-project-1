import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { FavouritesContextProvider } from './store/Favourites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FavouritesContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <App />
      </BrowserRouter>
    </FavouritesContextProvider>
  </>

);


