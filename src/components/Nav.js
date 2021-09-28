import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/nav.css';

const navList = [
    {
        name: "Home",
        path: "/",
        exact: true
    },
    {
        name: "Wheels",
        path: "/wheels"
    },
    {
        name: "Gallery",
        path: "/gallery"
    },
    {
        name: "About us",
        path: "/about"
    },
    {
        name: "Sign up",
        path: "/signup"
    },
    {
        name: "Sign in",
        path: "/signin"
    },
]

const Nav = () => {
    const menu = navList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return(
        <nav>
            <ul>{menu}</ul>
        </nav>
    );
}

export default Nav;