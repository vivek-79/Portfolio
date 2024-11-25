
'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

function ProjectLayout({name,description,date,demoLink}) {

  const item = {
    hidden:{opacity:0,y:100},
    show:{opacity:1,y:0}
}
const NavLink = motion(Link)
  return (
    <NavLink variants={item}  href={demoLink} target='_blank' className='test-sm md:text-base flex items-center justify-between w-full rounded-lg relative overflow-hidden p-4 md:p-6 custom-bg cursor-pointer '>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'>{name}</h2>
            <p className='text-muted hidden sm:inline-block'>{description}</p>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'/>
        <p className='text-foreground text-muted sm:text-foreground'>
            {new Date(date).toDateString()}
        </p>
    </NavLink>
  )
}

export default ProjectLayout