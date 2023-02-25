

import React from 'react';
import classes from './FilmList.module.css';
import FilmItem from './FilmItem';

function FilmList(props) {
    console.log(props);
    return (
        <ol className={classes.list}>
            {props.allfilms.map((film) =>
                <FilmItem key={film.id} oneFilm={film}></FilmItem>)}
        </ol>

    )
}

export default FilmList