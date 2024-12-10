import React from "react";
import classes from "./FilmItem.module.css";
import Card from "./Card";
import { useContext } from "react";
import FavContext from "../store/Favourites-context";
import { Pencil, Trash2 } from "lucide-react";

function FilmItem(props) {
  const favCtx = useContext(FavContext);

  let isFavValue = favCtx.isFavrouite(props.oneFilm.id);

  function addToFav() {
    if (isFavValue) favCtx.removeFavourites(props.oneFilm.id);
    else favCtx.addFavourite(props.oneFilm);
  }
  return (
    <li>
      <Card>
        <div className={classes.item}>
          <div className={classes.image}>
            <img src={props.oneFilm.image}></img>
          </div>
          <div className={classes.title}>
            <span className={classes.text}>{props.oneFilm.title}</span>
            <div className={classes.buttons}>
              <button className={classes.btnedit}>
                <Pencil></Pencil>
              </button>
              <button className={classes.btnedit}>
                <Trash2></Trash2>
              </button>
            </div>
          </div>
          <div className={classes.content}>
            <p> {props.oneFilm.year}</p>
            <p> {props.oneFilm.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={addToFav}>
              {isFavValue ? "Remove From Favourites" : "Add to Favourites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default FilmItem;
