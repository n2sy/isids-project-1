


import React from 'react'
import { useContext } from 'react';
import FilmList from '../components/FilmList';
import FavContext from '../store/Favourites-context';

function Favorites() {
    const favCtx = useContext(FavContext)
    return (
        <FilmList allfilms={favCtx.listFavourites}></FilmList>
    )
}

export default Favorites