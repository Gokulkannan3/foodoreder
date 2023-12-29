import React, { useState } from "react";
import innum from '../images/innum.png'
import './navbar.css'
import { Link } from "react-router-dom";
import './lnav.css';
import menu from '../images/menu.png'
import close from '../images/remove.png'

export default function Anav(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='out bg-black h-32'>
            <div className="flex justify-start translate-y-3 translate-x-5">
                <img src={innum} alt="innum" className="w-24"/>
            </div>
            <div className="head font-bold text-white translate-x-36 -translate-y-16 text-2xl">
                <p>Innum Vai!!!</p>
                <p>Happy Tummy Ahead!!!</p>
            </div>
            <div className={`menu w-14 translate-x-96 -translate-y-28 ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                <img src={menu} alt="menu" className="w-8" />
            </div>
            <div className="bi flex bg-black w-52 items-center justify-end -translate-y-40 -mt-7 translate-x-64 gap-y-4">
                <ul className={menuOpen ? "open" : ""}>
                    <div className="w-6 translate-x-40 mt-2" onClick={closeMenu}>
                        <img src={close} alt="Close"/>
                    </div>
                    <li>
                        <Link to='/about'>
                            <button className="text-white font-bold mb-1 text-xl -mt-12 h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">About</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            <button className="text-white font-bold mb-4 text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
