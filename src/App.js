import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFilms from './views/AllFilms';
import AddFilm from './views/AddFilm';
import Favorites from './views/Favorites';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/allFilms' element={<AllFilms></AllFilms>}></Route>
      <Route path='/addFilm' element={<AddFilm></AddFilm>}></Route>
      <Route path='/favorites' element={<Favorites></Favorites>}></Route>
    </Routes>



  );
}

export default App;
