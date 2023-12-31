import React, { useContext, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import Lottie from "lottie-react";
import chef from './139086-3d-chef-dancing.json'
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between '>
                <Link
                    to='/'
                    className='inline-flex items-center'>
                    <span className='ml-2 font-bold text-xl tracking-wide text-gray-800'>Petite Cuisine
                    </span>
                    <Lottie
                        className='w-24 h-24'
                        animationData={chef}></Lottie>
                </Link >

                {/* nav section  */}
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active hover:text-blue-400' : 'default hover:text-blue-400')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active hover:text-blue-400' : 'default hover:text-blue-400')}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => (isActive ? 'active hover:text-blue-400' : 'default hover:text-blue-400')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        {user ? <button
                            className='active '
                            onClick={handleLogout}> Logout</button>
                            :
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active hover:text-blue-400' : 'default hover:text-blue-400')}
                            >
                                Login
                            </NavLink>}
                    </li>
                </ul>
                {/* mobile navbar  */}
                <div className='lg:hidden'>
                    {/* dropdown open button */}
                    <button
                        aria-level='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600'></Bars3BottomRightIcon>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* logo and button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            className='inline-flex items-center'>
                                            <span
                                                className='ml-2 font-bold text-xl tracking-wide text-gray-800'>
                                                Petite Cuisine
                                            </span>
                                            <Lottie
                                                className='w-24 h-24'
                                                animationData={chef}>
                                            </Lottie>



                                        </Link >

                                    </div>
                                    <div>
                                        {/* dropdown button close button */}
                                        <button
                                            aria-level='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' ></XMarkIcon>
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile nav item section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/'
                                                className='font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400'>Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/books'
                                                className='font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400'>Blog
                                            </Link>
                                        </li>
                                        <li>
                                            {user ? <button
                                                className='active '
                                                onClick={handleLogout}> Logout</button>
                                                :
                                                <NavLink
                                                    to='/login'
                                                    className={({ isActive }) => (isActive ? 'active hover:text-blue-400' : 'default hover:text-blue-400')}
                                                >
                                                    Login
                                                </NavLink>}
                                        </li>
                                        <li>
                                            <Link
                                                to='/login'
                                                className='font-medium tracking-wide text-gray-700 transition duration-200 hover:text-blue-400'>Login
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;