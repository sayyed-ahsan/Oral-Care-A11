import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import logoimage from '../../images/oral/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'}>
                    <div className='flex justify-center items-center ml-3'>
                        <div><img className='w-9' src={logoimage} alt="" /></div>
                        <p className=' normal-case text-2xl text-white'>OralCare</p>
                    </div>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link to={'/'}><li><a>Home</a></li></Link>
                    <Link to={'/services'}><li><a>Servises</a></li></Link>
                    <Link to={'/myreviews'}><li><a>My reviews</a></li></Link>
                    <Link to={'/blog'}><li><a>Blog</a></li></Link>

                    {
                        user ?
                            <>

                                <Link to={'/addsevice'}><li><a>Add service</a></li></Link>
                                <Link to={'/'}><li><a><button onClick={handleSignOut}>Sign Out</button></a></li></Link>
                                <Link to={'/myreviews'}><li>
                                    <div className="avatar">
                                        <div className="w-6 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </li></Link>

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