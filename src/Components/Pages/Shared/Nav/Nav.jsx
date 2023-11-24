/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
// import { MdPages, MdNewReleases } from 'react-icons/md';
// import { BiDetail } from 'react-icons/bi';
// import { PiSignInBold } from 'react-icons/pi';
// import { SiGnuprivacyguard } from 'react-icons/si';

import { useContext, useEffect, useState } from "react";
// import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    // const user = true;
    // logout user function 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged Out');
                Swal.fire(
                    'Logged Out Successfull!',
                    'You clicked the button!',
                    'success'
                )
            })
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        {/* <li><Link to="/">Home </Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Bolgs</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
        <li>
            <Link to="/" className="mr-1 relative px-3 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#E8604C] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Home</span>
        </Link>
        </li>
        <li>
            <Link to="/blogs" className="mr-1 relative px-3 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#E8604C] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Blogs</span>
        </Link>
        </li>
        <li>
            <Link to="/" className="relative mr-1 px-3 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#E8604C] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">About</span>
        </Link>
        </li>
        <li>
            <Link to="/" className="relative  px-3 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#E8604C] opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Community</span>
        </Link>
        </li>
    </>


    // change nav color when scrolling 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= window.innerHeight * 0.3) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        // Cleaning the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div className={`${color ? "bg-[#eec7b3] transform duration-1000 " : "bg-[#f7f2f0] transform duration-1000  "
            } sticky top-0 z-30 border-gray-200 dark:bg-gray-900 h-[80px] transition-all duration-300 ease-in-out `}>

            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <span className="flex items-center justify-center gap-1">
                            <img src="logo.png" alt="" className="h-9 " />
                            <h2 className="text-xl font-semibold">SkyTrip</h2>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end ml-12">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu text-gray-700 menu-sm dropdown-content space-y-3 bg-gray-200 rounded-box w-52 ">
                                <li >
                                    <h2 className="text-base text-[#a94030] hover:bg-slate-600 hover:text-white">
                                        {user?.displayName}
                                    </h2>
                                    <p className="text-xs ">{ user.email}</p>
                                </li>
                                <li >
                                    <Link className="hover:bg-slate-600 p-1 rounded-lg hover:text-white">Dashboard</Link>
                                </li>
                                <li >
                                    <Link className="hover:bg-slate-600 p-1 rounded-lg hover:text-white">Offers</Link>
                                </li>
                                <li >
                                    <button onClick={handleLogOut} className="hover:bg-slate-600 p-1 rounded-lg hover:text-white">Log Out</button>
                                </li>
                              
                                
                            </ul>
                        </div> :
                            <>
                                <Link to='/login' className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#E8604C]  rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Login</span>
                                </Link> 
                                
                                
                              
                            </>
                    }

                </div>



            </div>
        </div>
    );
};

export default Nav;
{/* <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn">Button</a>
    </div>
</div> */}

