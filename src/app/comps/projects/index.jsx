

'use client'
import React from 'react'
import ProjectLayout from './ProjectLayout'
import {motion} from 'framer-motion'

const container ={
  hidden:{opacity:0},
  show:{opacity:1,
    transition:{
      staggerChildren:0.3,
      delayChildren:1.5
    }
  }
}

function ProjeectList({projects}) {
  return (
    <motion.div 
    variants={container}
        initial ='hidden'
        animate = 'show'
    className='w-full h-full absolute top-0 max-w-auto xl:max-w-4xl px-4 lg:px-16 mx-auto space-y-6 md:space-y-8 flex flex-col items-center'>
        {
            projects.map((project,indx)=>(
                <ProjectLayout key={indx} {...project}/>
            ))
        }
    </motion.div>
  )
}

export default ProjeectList