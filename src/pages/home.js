import React from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import coffee from '../images/coffee.png';
import pasta from '../images/pasta.png';
import rosemilk from '../images/rosemilk.png'
import './home.css'

export default function Home() {
  
  return (
    <div>
      <Navbar/>
      <div className="carousel w-full bg-red-300 h-96">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
          <img src={coffee} alt='coffee' className="coffee w-96 h-96"/>
          <p className='text-blue-900 font-bold text-7xl font-serif flex justify-center items-center gap-8'>How About <p className='text-amber-950'>Coffee Breaks!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item bg-amber-600 relative w-full flex justify-center items-center">
          <img alt='pasta' src={pasta} className="pasta w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Taste our <p className='text-black'>Yummy pastas!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="bg-sky-800 carousel-item relative w-full flex justify-center items-center">
          <img alt='rosemilk' src={rosemilk} className="rosemilk w-96 h-96" />
          <p className='text-white font-bold text-7xl font-serif flex justify-center items-center gap-8'>Rosemilk Vangi <p className='text-red-400'>Tharaen Da!!!</p></p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <p>Home</p>
    </div>
  )
}
