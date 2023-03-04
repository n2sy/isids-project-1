import { createContext, useState } from "react";


const FavContext = createContext(
    {
        nbFavourites: 0,
        listFavourites: [],
        addFavourite: () => { },
        removeFavourites: () => { },
        isFavrouite: () => { }

    }
)

export function FavouritesContextProvider(props) {
    const [listFavs, setListFavs] = useState([]);

    function addFav(film) {
        setListFavs([...listFavs, film]);
    }

    function removeFav(id) {
        setListFavs(listFavs.filter((element) => element.id != id))
    }

    function isFav(id) {
        return listFavs.some((element) => element.id == id)
    }

    const fav = {
        nbFavourites: listFavs.length,
        listFavourites: listFavs,
        addFavourite: addFav,
        removeFavourites: removeFav,
        isFavrouite: isFav

    }


    return <FavContext.Provider value={fav}>
        {props.children}
    </FavContext.Provider>

}

export default FavContext;