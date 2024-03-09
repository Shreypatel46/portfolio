import React from 'react'
import { motion } from 'framer-motion'
import "./Navbar.scss"
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
                initial={{opacity:0 ,scale: 0.5}}
                animate={{opacity:1 , scale:1}}
                transition={{duration:.60}}
            >RSP</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="insta" /></a>
                <a href="#"><img src="/youtube.png" alt="youtube" /></a>
                <a href="#"><img src="/dribbble.png" alt="dribble" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
