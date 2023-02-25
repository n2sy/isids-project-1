import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFilms from './views/AllFilms';
import AddFilm from './views/AddFilm';
import Favorites from './views/Favorites';
import Home from './views/Home';
import { useState } from 'react';

function App() {
  const LIST_FILMS = [
    {
      id: 'f1',
      title: 'Heat',
      year: '1995',
      image: 'https://www.booska-p.com/wp-content/uploads/2021/12/heat-article-anecodtes-booska-p-1-683x1024.jpg',
      description: "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations. Cependant, ce dernier tue froidement l'un des convoyeurs et Chris Shiherlis se retrouve obligé de terminer le travail."
    },
    {
      id: 'f2',
      title: 'Inception',
      year: '2010',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      description: "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. "
    },
  ];
  const [filmList, setFilmList] = useState(LIST_FILMS);

  console.log(filmList);

  function addNewFilm(newFilm) {
    setFilmList((previous) => {
      console.log(previous);
      return [...previous, newFilm];
    });
  }
  return (

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/allFilms' element={<AllFilms allfilms={LIST_FILMS}></AllFilms>}></Route>
      <Route path='/addFilm' element={<AddFilm onAdd={addNewFilm}></AddFilm>}></Route>
      <Route path='/favourites' element={<Favorites></Favorites>}></Route>
    </Routes>



  );
}

export default App;
