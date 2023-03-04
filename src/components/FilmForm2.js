

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './FilmForm.module.css'

function FilmForm2(props) {

    const titleRef = useRef();
    const imageRef = useRef();
    const yearRef = useRef();
    const descriptionRef = useRef();

    const navigate = useNavigate(); // useHistory


    function submitHandler(event) {
        event.preventDefault();
        console.log(event);
        let newFilm = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            year: yearRef.current.value,
            description: descriptionRef.current.value
        };
        console.log(newFilm);
        fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json',
            {
                method: 'POST',
                body: JSON.stringify(newFilm),
                headers: {
                    "Content-Type": "application/json",
                },

            })
            //.then(res => { return res.json() })
            .then(res => res.json())
            .then(data => {
                alert("Film Added")
                navigate("/allfilms");
            })
            .catch(err => { console.log(err); })
        //props.onAdd(newFilm);
        // navigate("/allfilms", { replace: true });





    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label>Title</label>
                <input type="text" ref={titleRef}></input>

            </div>
            <div className={classes.control}>
                <label>Image</label>
                <input type="url" ref={imageRef}></input>

            </div>
            <div className={classes.control}>
                <label>Year</label>
                <input type="number" ref={yearRef}></input>

            </div>
            <div className={classes.control}>
                <label>Description</label>
                <textarea cols="5" rows="6" ref={descriptionRef}></textarea>

            </div>
            <div className={classes.actions}>
                <button type="submit">Submit</button>

            </div>


        </form>
    )
}

export default FilmForm2