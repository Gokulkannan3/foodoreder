import React from "react";
import innum from '../images/innum.png'
import '../App.css'
import { Link } from "react-router-dom";
import './lnav.css';

export default function Anav(){
    return(
        <div className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24"/>
            </div>         
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-2xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className="flex items-center justify-end -translate-y-32 -translate-x-5 gap-4">
                <Link to='/home'>
                    <button className="text-white font-bold text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Home</button>
                </Link>
                <Link to='/about'>
                    <button className="text-white font-bold text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">About</button>
                </Link>
                <Link to='/'>
                    <button className="text-white font-bold text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Logout</button>
                </Link>
            </div>
        </div>
    )
}