
'use client'
import { BtnList } from '@/app/data'
import React from 'react'
import NavBtn from './NavBtn'
import useScreenSize from '../hooks/useScreenSiz'
import ResponsiveComp from '../ResponsiveComp'
import {motion} from 'framer-motion'


const container ={
  hidden:{opacity:0},
  show:{opacity:1,
    transition:{
      staggerChildren:0.3
    }
  }
}

function Navigation() {

    const angleInc = 360/BtnList.length
    const size = useScreenSize()

    const isLarge = size>=1024
    const isMedium = size >=768

  return (
   <div className='main-btn w-full fixed h-screen flex items-center justify-center'>
     <ResponsiveComp>
      {
        ({size})=>(
          size && size >= 480 ?(
            <div 
            className={`flex items-center justify-center relative animate-spin-slow hover:pause group `}>
        {BtnList.map((btn,i)=>{
            const angleRad = (i*angleInc*Math.PI)/180

            const radius =isLarge? 'calc(20vw - 1rem)': isMedium ? 'calc(30vw - 1rem)': 'calc(30vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y =  `calc(${radius}*${Math.sin(angleRad)})`
            return  <NavBtn key={btn.label} x={x} y={y} {...btn} ></NavBtn>
        })}
    </div>
          ):(
            <>
            <motion.div 
            variants={container}
            initial ='hidden'
            animate = 'show' 
            className={`w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative `}>
        {BtnList.slice(0,BtnList.length/2).map((btn,i)=>{
            const angleRad = (i*angleInc*Math.PI)/180

            const radius =isLarge? 'calc(20vw - 1rem)': isMedium ? 'calc(30vw - 1rem)': 'calc(30vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y =  `calc(${radius}*${Math.sin(angleRad)})`
            return  <NavBtn key={btn.label} x={x} y={y} {...btn} ></NavBtn>
        })}
    </motion.div>
    <motion.div 
            variants={container}
            initial ='hidden'
            animate = 'show' className={`w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative `}>
        {BtnList.slice(BtnList.length/2).map((btn,i)=>{
            const angleRad = (i*angleInc*Math.PI)/180

            const radius =isLarge? 'calc(20vw - 1rem)': isMedium ? 'calc(30vw - 1rem)': 'calc(30vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y =  `calc(${radius}*${Math.sin(angleRad)})`
            return <NavBtn key={btn.label} x={x} y={y} {...btn} labelDirn='left' ></NavBtn>
        })}
    </motion.div>
            
            </>
          )
        )
      }
     </ResponsiveComp>
   </div>
  )
}

export default Navigation