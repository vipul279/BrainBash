import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Categories = () => {


  const [category, setCategory] = useState('');
  const navigate = useNavigate();


  const categoryselected = (categ) => {
    setCategory(categ);
    navigate(`/quiz/category/${categ}`)
  }

  useEffect(() => {
    if (category) {
      console.log('Category selected:', category);
    }
  }, [category]);


  return (
    <div className="relative min-h-screen bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455612.jpg?semt=ais_hybrid')] sm:bg-[url('https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455612.jpg?semt=ais_hybrid')]">
  <div className="absolute inset-0 bg-black/30 backdrop-blur"></div>
  <Navbar />

  <div className="relative mt-8">
    {/* Mobile: Second Image */}
    <div className="sm:hidden">
      <div className="bg-cover bg-no-repeat bg-[url('https://another-image-url.jpg')]  w-full"></div>
    </div>

    {/* Cards Section */}
    <div className="cards-section flex flex-wrap justify-center items-center gap-4 sm:grid sm:grid-cols-3 sm:justify-start sm:items-start sm:ml-40 sm:gap-16 text-lg font-normal">
      <div className="card" onClick={() => { categoryselected('Technology') }}>
        <img className="w-60 h-60 mb-2" src="https://img.freepik.com/premium-vector/technology-design-clip-art-vector-design-with-white-background_579306-14280.jpg" alt="" />
        Technology
      </div>
      <div className="card" onClick={() => { categoryselected('Sports') }}>
        <img className="w-60 h-60 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/400px-Sport_balls.svg.png" alt="" />
        Sports
      </div>
      <div className="card" onClick={() => { categoryselected('Mathematics') }}>
        <img className="w-60 h-60 mb-2" src="https://m.media-amazon.com/images/I/611irziMwdL.jpg" alt="" />
        Mathematics
      </div>
      <div className="card" onClick={() => { categoryselected('Science') }}>
        <img className="w-60 h-60 mb-2" src="https://img.freepik.com/free-vector/colorful-science-objects-icons-vector-set_1308-140707.jpg?semt=ais_hybrid" alt="" />
        Science
      </div>
      <div className="card" onClick={() => { categoryselected('Animals') }}>
        <img className="w-60 h-60 mb-2" src="https://freedesignfile.com/upload/2014/04/Funny-cartoon-animal-and-fish-with-bird-vector.jpg" alt="" />
        Animals
      </div>
      <div className="card" onClick={() => { categoryselected('General Knowledge') }}>
        <img className="w-60 h-60 mb-2" src="https://img.freepik.com/premium-photo/brain-logo-icon-human-brain-icon-creative-simple-mind-symbol-vector-illustration_1162225-51928.jpg" alt="" />
        General Knowledge
      </div>
    </div>
  </div>
</div>

  )
}

export default Categories