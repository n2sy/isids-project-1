


import React from 'react';
import classes from './FilmItem.module.css'
import Card from './Card';

function FilmItem(props) {
    return (
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
                    <button>Add To Favourites</button>
                </div>
            </div>
        </Card>
    )
}

export default FilmItem