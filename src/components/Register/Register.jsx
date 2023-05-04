import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        setError('')
        setSuccess('')

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setSuccess('User Created Successfully')
                event.target.reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
                // ..
            });


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered"
                                name='name'
                                required
                            />
                        </div>
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
                                className="input input-bordered"
                                name='password'
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Photo Url"
                                className="input input-bordered"
                                name='photo'
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-red-600 text-center'>{error}</p>
                        <p className='text-blue-600 text-center'>{success}</p>
                    </form>
                    <p>Already have an account? <Link className='text-blue-500 underline' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;