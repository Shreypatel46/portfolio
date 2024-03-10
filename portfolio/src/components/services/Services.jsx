import React, { useRef } from 'react'
import './Services.scss'
import {animate, motion , useInView} from 'framer-motion'


const variants={
    initial:{
        x:-500,
        opacity:0,
        y:100,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {

    const ref= useRef()
    const isInView =useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services"
     variants={variants}
      initial="initial" 
      //whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
            <p>Focus on helping your brand grow
                 <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Idea</h1> 
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>business</h1> 
                <button>WHAT WE DO</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.</p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services
