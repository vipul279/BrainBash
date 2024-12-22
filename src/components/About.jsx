import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
      <div className="relative h-screen  bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455612.jpg?semt=ais_hybrid')]">
        <div className="absolute inset-0 bg-black/30 backdrop-blur"></div>
        <Navbar />
        <div className=' relative sm:h-5/6 mt-2 flex justify-center items-center'>

          <div className='card h-2/6 w-72 sm:w-7/12 text-2xl bg-black bg-opacity-20 text-white '>Welcome to Quizzy, your go-to app for fun and engaging quizzes across various topics! Test your knowledge, challenge your friends, and learn something new with every question. Dive into the excitement and see how high you can score!</div>
        </div>    
        </div>
    </>

  )
}

export default About