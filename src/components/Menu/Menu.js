import React from 'react';
import '../Menu/Menu.scss'
import logo from "../../assets/lug.png"
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { Link } from "react-scroll";
//import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
    return (
        <div className='fondo'>
            <nav className="menu" id='menu'>
                <img src={logo} className="logo" alt='logo' />
                <ul>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>

                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >
                            Features
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >
                            Roadmap
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Team
                        </Link>
                    </li>
                    <li className='menu__icons'><a href="#!"><FaDiscord /></a></li>
                    <li className='menu__icons'><a href="#!"><FaTwitter /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;