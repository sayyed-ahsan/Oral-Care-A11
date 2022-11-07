import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link><a className="btn btn-ghost normal-case text-xl">OralCare</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link to={'/'}><li><a>Home</a></li></Link>
                    <Link to={'/services'}><li><a>Servises</a></li></Link>
                    <Link to={'/login'}><li><a>Login</a></li></Link>
                    <Link to={'/register'}><li><a>Register</a></li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;