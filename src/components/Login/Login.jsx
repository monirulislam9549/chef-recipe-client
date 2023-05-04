import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signIn, socialUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        socialUser(googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                // const errorCode = error.code;               
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        socialUser(githubProvider)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email);
        setError('')
        setSuccess('')

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSuccess("User Logged Successfully")
                event.target.reset();
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name='email'
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered relative"
                                name='password'
                                required
                            />
                            <span className='w-6 h-6 absolute right-10 top-44 cursor-pointer'><EyeSlashIcon></EyeSlashIcon> </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-600 text-center'>{error}</p>
                        <p className='text-blue-600 text-center'>{success}</p>
                    </form>

                    <div className='text-center flex flex-col'>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign In With Google</button>
                        <button onClick={handleGithubSignIn} className="mt-2 btn btn-primary">Sign In With Github</button>
                    </div>
                    <p>Don't have an account? <Link className='text-blue-500 underline' to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;