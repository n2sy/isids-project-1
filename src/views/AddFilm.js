

import React from 'react'
import FilmForm from '../components/FilmForm';
import Card from '../components/Card';
import FilmForm2 from '../components/FilmForm2';

function AddFilm(props) {
    return (
        <Card>
            {/* <FilmForm onAdd={props.onAdd}></FilmForm> */}
            <FilmForm2 onAdd={props.onAdd}></FilmForm2>
        </Card>
    )
}

export default AddFilm