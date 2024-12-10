import React from "react";
import classes from "./FilmList.module.css";
import FilmItem from "./FilmItem";

function FilmList(props) {
  console.log(props);
  return (
    <ol className={classes.list}>
      <div className="row">
        {props.allfilms.map((film) => {
          return (
            <div className="col-5">
              <FilmItem key={film.id} oneFilm={film}></FilmItem>
            </div>
          );
        })}
      </div>
    </ol>
  );
}

export default FilmList;
