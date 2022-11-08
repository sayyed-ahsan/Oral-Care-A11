import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link><a className="btn btn-ghost normal-case text-xl">OralCare</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link to={'/'}><li><a>Home</a></li></Link>
                    <Link to={'/services'}><li><a>Servises</a></li></Link>
                    <Link to={'/blog'}><li><a>Blog</a></li></Link>

                    {
                        user ?
                            <>
                                <Link to={'/myreviews'}><li><a>My reviews</a></li></Link>
                                <Link to={'/addsevice'}><li><a>Add service</a></li></Link>
                                <Link to={'/services'}><li><a><button onClick={handleSignOut}>Sign Out</button></a></li></Link>
                            </>
                            :
                            <>
                                <Link to={'/login'}><li><a>Login</a></li></Link>
                                <Link to={'/register'}><li><a>Register</a></li></Link>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;