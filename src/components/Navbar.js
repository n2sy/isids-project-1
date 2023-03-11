


import React, { useContext } from 'react';
import classes from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import FavContext from '../store/Favourites-context';
import LoginContext from '../store/Login-context';

function Navbar() {
    let activeStyle = { 'textDecoration': 'overline' };
    let inActiveStyle = { 'textDecoration': 'underline' };

    let FavCtx = useContext(FavContext);
    const LogCtx = useContext(LoginContext);

    if (LogCtx.isLogging)
        return (
            <header className={classes.header}>
                <div className={classes.logo}>Films Store</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <NavLink to="/allFilms">
                                {
                                    ({ isActive }) =>
                                        <span className={isActive ? 'active' : 'inactive'} >All Films</span>
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={({ isActive }) => isActive ? activeStyle : inActiveStyle} to="/addFilm">
                                Add Film
                            </NavLink>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites
                                <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                    {FavCtx.nbFavourites}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header >
        )
    else
        return (
            <header className={classes.header}>
                <div className={classes.logo}>Films Store</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                    </ul>
                </nav>
            </header >
        )
}

export default Navbar;