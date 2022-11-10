// import React from 'react';

// const Rejister = () => {
//     return (
//         <div>
//             register pag
//         </div>
//     );
// };

// export default Rejister;



import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';
import './Rejister.css'
const Rejister = () => {

    useTitle('Register')

    const { creatUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        creatUser(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });

            setError('');
        })
            .catch(e => {
                console.error(e)
                form.reset();
                console.error(error.message)
                setError(error.message)
            });


    }

    return (
        <div className='login-body py-8'>
            <div class="box-sign">
                <form class="form" onSubmit={handleSubmit}>

                    <h2 className='text-3xl'>Register </h2>
                    <div class="inputbox">
                        <input type="text" name='name' required="required" />
                        <span>Username </span>
                        <i></i>
                    </div>

                    <div class="inputbox">
                        <input type="text" name='' required="required" />
                        <span>Photo Url </span>
                        <i></i>
                    </div>

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
                            <a><Link className='text-1xl'>Pleae try Again...!</Link></a>
                        </div>
                        :
                        <div class="links">
                            <a><Link className='text-1xl' to={'/login'}>have an account</Link></a>
                        </div>
                    }

                    <input type="submit" value="Signup" />
                </form>
            </div>

        </div>
    );
};

export default Rejister;