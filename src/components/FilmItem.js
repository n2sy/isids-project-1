


import React from 'react';
import classes from './FilmItem.module.css'
import Card from './Card';
import { useContext } from 'react';
import FavContext from '../store/Favourites-context';

function FilmItem(props) {
    const favCtx = useContext(FavContext);

    let isFavValue = favCtx.isFavrouite(props.oneFilm.id);

    function addToFav() {
        if (isFavValue)
            favCtx.removeFavourites(props.oneFilm.id);
        else
            favCtx.addFavourite(props.oneFilm)
    }
    return (
        <li>
            <Card>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={props.oneFilm.image}></img>
                    </div>
                    <div className={classes.content}>
                        <h3> {props.oneFilm.title}</h3>
                        <p> {props.oneFilm.year}</p>
                        <p> {props.oneFilm.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={addToFav}>{isFavValue ? 'Remove From Favourites' : 'Add to Favourites'}</button>
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default FilmItem