

import React, { useEffect, useState } from 'react'
import FilmList from '../components/FilmList';
import { FavouritesContextProvider } from '../store/Favourites-context';

function AllFilms(props) {
    const [filmList, setFilmList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json')
            .then(res => { console.log(res); return res.json() })
            .then(data => {
                setLoading(false);
                console.log(data);
                let newTab = [];
                for (const key in data) {
                    let f = { id: key, ...data[key] }
                    newTab.push(f);
                }
                setFilmList(newTab);
                console.log(newTab);
            })

    }, [])

    if (loading) {
        return (
            <>
                <div>List of all Films</div>
                <h2> Data is Loading...</h2>
            </>
        )
    }
    else
        return (

            <>
                <div>List of all Films</div>
                <FilmList allfilms={filmList}></FilmList>

            </>

        )
}

export default AllFilms