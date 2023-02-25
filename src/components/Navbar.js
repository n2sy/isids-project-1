


import React from 'react';
import classes from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    let activeStyle = { 'textDecoration': 'overline' };
    let inActiveStyle = { 'textDecoration': 'underline' };

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
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar;