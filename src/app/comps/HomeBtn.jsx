
'use client'
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Link from "next/link"

const NavLink = motion(Link)
function HomeBtn() {

  return (
      <NavLink  target={'_self'} 
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{delay:1}}
    className='text-foreground rounded-full  flex items-center justify-center 
    bg-background/20 border border-accent/30 custom-bg fixed top-4 left-4 w-fit self-start z-50' aria-label={"home"} href={'/'} name ={"home"}>
       <span className=' relative w-14 h-14 p-4 '>
       <Home className='w-full h-auto' strokeWidth={1.5}/>
       </span>

    </NavLink>
  )
}

export default HomeBtn