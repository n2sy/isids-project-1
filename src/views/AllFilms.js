

import React from 'react'
import FilmList from '../components/FilmList';

function AllFilms(props) {
    return (
        <>
            <div>List of all Films</div>
            <FilmList allfilms={props.allfilms}></FilmList>
        </>

    )
}

export default AllFilms