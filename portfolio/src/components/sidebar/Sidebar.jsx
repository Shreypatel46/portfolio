import React, { useState } from 'react'
import {motion} from 'framer-motion'
import "./Sidebar.scss"
import ToggleButton from './toggleButton/ToggleButton'
import Links from './Links/Links'
const Sidebar = () => {
    const [open, setOpen] =useState(false);

    const variants ={
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
                damping:40,
            },
        },
        closed:{
            // for custom shape 
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type : "spring",
                stiffness: 400,
                damping: 100,
            },
        },
    };
  return (
    <motion.div 
    animate={open ? "open" : "closed"}
    className='sidebar'>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
