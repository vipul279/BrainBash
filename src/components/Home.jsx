import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455612.jpg?semt=ais_hybrid')]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur"></div>
      
      <Navbar />
      <div className="relative flex flex-col items-center justify-center h-[89vh]">
        <p className="text-center font-extrabold text-4xl sm:text-5xl text-white px-4 md:px-8 md:text-6xl">
          Unleash Your Brain Power – Dive into the Ultimate Quiz Challenge!
        </p>
        <br />
        <Link to={'/categories'}>
        <button className='bg-purple-300 p-3 sm:p-5 rounded-xl text-xl sm:text-2xl font-bold text-purple-950'>
          Get Started
        </button>
        </Link>
        

      </div>
    </div>
  );
};

export default Home;
