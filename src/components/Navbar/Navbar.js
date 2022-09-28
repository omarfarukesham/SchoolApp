import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-gray-800 z-10 sticky top-0">

                {/* Dropdown code, Hembarger Menu code start here ....  */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li tabIndex={0}>
                                <Link to="/main">
                                    Dashboard
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-200">
                                    <li><Link to="/student">Student</Link></li>
                                    <li><Link to="/teacher">Teacher</Link></li>
                                    <li><Link to="/admin">Admin</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Chat">Chat</Link></li>
                            <li><Link to="/Resource">eResource</Link></li>
                            <li><Link to="/Quiz">Quiz</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-gray-800  text-white normal-case text-xl">mySchool</a>
                </div>
                {/* Dropdown code, Hemburgar Menu code End here ....  */}


                {/* Main Navbar code start here ....  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white font-bold text-xl">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/main">
                                Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-gray-800">
                                <li><Link to="/student">Student</Link></li>
                                <li><Link to="/teacher">Teacher</Link></li>
                                <li><Link to="/admin">Admin</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Chat">Chat</Link></li>
                        <li><Link to="/Resource">eResource</Link></li>
                        <li><Link to="/Quiz">Quiz</Link></li>
                    </ul>
                </div>
                {/* Main Navbar code End here ....  */}


                {/* Login and singUp button navbar routes here .............  */}
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-primary text-white">Login</Link>
                </div>

            </div>
        </>
    );
};

export default Navbar;