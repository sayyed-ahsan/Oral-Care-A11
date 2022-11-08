import React, { useContext, useState } from 'react';
import './Login.css'
import { FcGoogle, } from 'react-icons/fc';
import { BsGithub, } from 'react-icons/bs';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';


const Login = () => {

    const { signIn, providerLogin, providerLoginGithub } = useContext(AuthContext);

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()
    const githubPorvider = new GithubAuthProvider()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        providerLoginGithub(githubPorvider)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }




    return (
        <div className='login-body'>
            <div class="box">
                <form class="form" onSubmit={handleSubmit}>
                    {/*---------- social login --------------*/}
                    <span onClick={handleGoogleSignIn} className='g-signin text-center'><FcGoogle className='mx-2'></FcGoogle>sign in with google</span>

                    <span onClick={handleGithubSignIn} className='g-signin text-center my-3'><BsGithub className='mx-2'></BsGithub>sign in with github</span>
                    {/* ----------------------------------- */}
                    <h3 className='text-center text-xl mt-8'>------- OR --------</h3>
                    <div class="inputbox">
                        <input type="email" name='email' required="required" />
                        <span>Email </span>
                        <i></i>
                    </div>

                    <div class="inputbox">
                        <input type="password" name='password' required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>

                    {error ?
                        <div class="links">
                            <a><Link className='text-danger fs-6'>{error}</Link></a>
                        </div>
                        : <div class="links">
                            <a><Link className='fs-6' to={'/signup'}>Signup</Link></a>
                        </div>}
                    <input type="submit" value="Login" />

                </form>

            </div>

        </div>
    );
};

export default Login;