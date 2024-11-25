
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from "lucide-react"
import {motion} from 'framer-motion'


function Sound() {

    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const[show,setShow] = useState(true)
    const toggle = ()=>{
        setIsPlaying(!isPlaying)
        if(audioRef){
            audioRef.current.volume=0.4
            !isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }

   const handleConsent  =(data)=>{
    setShow(false)
    if(data=='true' && audioRef.current){
        audioRef.current.play()
        setIsPlaying(true)
    }
   }
  return (
    <>
    <div className='fixed top-4 right-2.5 xs:right-4 z-50 group '>
        <audio loop ref={audioRef}>
            <source src='/audio/birds39-forest-20772.mp3' type='audio/mp3'/>
            your browser does not support the audio element.
        </audio>

    <motion.button 
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:1}}
        onClick={toggle}
        className='text-foreground rounded-full  flex items-center justify-center 
    bg-background/20 border border-accent/30 custom-bg fixed top-4 right-4 w-fit self-start z-50' aria-label={"home"} name ={"home"}>
       <span className=' relative w-14 h-14 p-4 '>
       {
            isPlaying ?
            <Volume2 className='w-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>
            :
            <VolumeX className='w-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>
        }
       </span>
       
    </motion.button>
    </div>
    { show && 
        <div className='fixed flex flex-col gap-4 justify-center top-1/2 left-1/2 py-4 -translate-x-1/2 custom-bg w-[340px]  z-50 rounded-xl'>
            <h2 className='text-center  text-md text-accent'>Would You Like To Enable Music</h2>
            <div className='w-full flex items-center justify-around'>
                <button onClick={()=>handleConsent('true')} className='bg-green-400 hover:bg-green-600 px-6 text-black rounded-md cursor-pointer hover:shadow-md'>Yes</button>
                <button onClick={()=>handleConsent('false')} className='bg-red-400 px-6 hover:bg-red-600 text-black rounded-md cursor-pointer hover:shadow-md'>No</button>
            </div>
        </div>
    }
    </>
  )
}

export default Sound