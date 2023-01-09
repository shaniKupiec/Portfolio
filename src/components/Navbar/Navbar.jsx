import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss';
import { images } from '../../constants';
// import x from '../../../public/favicon.svg'
const navbarNames = ['home', 'about', 'work', 'skills', 'contact'];

export default function Navbar() {

    const [toggle, setToggle] = useState(false)
    return (
        <nav className='app__navbar'>
            {/* <div className='app__navbar-logo'>
                <img src={x} alt='logo'/>
                <img src={images.logo} alt='logo' />
            </div> */}
            <ul className='app__navbar-links'>
                {navbarNames.map((item) => {
                    return (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                })}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [150, 0] }}
                        transition={{ duration: .7, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navbarNames.map((item) => {
                                return (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )
                }
            </div>
        </nav>
    )
}
