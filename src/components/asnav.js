import React, { useState } from "react";
import innum from '../images/innum.png'
import '../App.css'
import { Link } from "react-router-dom";
import './lnav.css';
import menu from '../images/menu.png'

export default function Asnav(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24"/>
            </div>         
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-2xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className={`menu w-14 translate-x-80 ml-6 -translate-y-28 ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menu} alt="menu" className="w-8" />
            </div>
            <div className="flex bg-black w-52 items-center justify-end -translate-y-20 -mt-2.5 translate-x-52 gap-y-4">
                <ul className={menuOpen ? "open" : ":"}>
                    <li>
                        <Link to='/alogin'>
                            <button className="text-white font-bold mb-4 text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
