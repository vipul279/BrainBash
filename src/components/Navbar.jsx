import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [MenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    }
    return (
        <>

            <div className=" relative h-20  m-0 p-0 flex text-center justify-around text-white font-bold text-2xl items-center" >
                <Link to={'/'}>
                    <div className=" -mr-5 sm:-mr-16 flex justify-center items-center">
                        <img className='h-14 mr-3 sm:h-16 rounded-3xl ' src="https://cdn-icons-png.freepik.com/256/7498/7498861.png?semt=ais_hybrid" alt="" />
                        <h1 className='-mr-8 sm:p-6 text-2xl sm:text-5xl font-bold font-mono text-white'>BrainBash</h1>
                    </div>
                </Link>
                <div className='mr-28 hidden  md:flex justify-center items-center gap-20 text-center '>
                    <Link className='w-16  hover:text-26 hover:underline ease-in-out transition-all duration-75' to="/">Home</Link>
                    <Link className='w-20 hover:text-26 hover:underline ease-in-out transition-all duration-75' to="/categories">Categories</Link>
                    <Link className='w-16 hover:text-26 hover:underline ease-in-out transition-all duration-75' to="/about">About</Link>

                </div>
                <div className=' hidden md:flex items-center justify-center '>
                    <Link>
                        <img className='h-12 w-12  rounded-full ' src="https://cdn-icons-png.flaticon.com/512/17436/17436446.png" alt="" />

                    </Link>
                </div>


                <div className="sm:hidden flex items-center justify-center">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                

            </div>
            {MenuOpen && (

                <div className=" relative w-full bg-bgcolor bg-opacity-45 text-white flex flex-col items-center ">
                    <Link className="text-base mb-3" to="/">
                        Home
                    </Link>
                    <Link className="text-base mb-3" to="/categories">
                        Categories
                    </Link>
                    <Link className="text-base " to="/about">
                        About
                    </Link>
                </div>
                )}
        </>
    )
}

export default Navbar