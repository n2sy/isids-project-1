

import React, { useState } from 'react';
import classes from './FilmForm.module.css'

function FilmForm(props) {
    // V1
    // [newFilm, setNewFilm] = useState(
    //     {
    //         title: '',
    //         image: '',
    //         year: ''
    //     }
    // )

    //V2
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [year, setYear] = useState('');


    function titleHandler(event) {
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    function imageHandler(event) {
        console.log(event.target.value);
        setImage(event.target.value);
    }
    function yearHandler(event) {
        console.log(event.target.value);
        setYear(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        let newFilm = {
            id: Math.random().toString(),
            title: title,
            year: year,
            image: image
        };
        console.log(newFilm);
        props.onAdd(newFilm);


    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label>Title</label>
                <input type="text" onChange={titleHandler}></input>

            </div>
            <div className={classes.control}>
                <label>Image</label>
                <input type="url" onChange={imageHandler}></input>

            </div>
            <div className={classes.control}>
                <label>Year</label>
                <input type="number" onChange={yearHandler}></input>

            </div>
            <div className={classes.actions}>
                <button type="submit">Submit</button>

            </div>


        </form>
    )
}

export default FilmForm