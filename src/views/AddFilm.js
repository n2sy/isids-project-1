

import React from 'react'
import FilmForm from '../components/FilmForm';
import Card from '../components/Card';

function AddFilm(props) {
    return (
        <Card>
            <FilmForm onAdd={props.onAdd}></FilmForm>
        </Card>
    )
}

export default AddFilm