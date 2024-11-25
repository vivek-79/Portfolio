
import Link from 'next/link'
import { Github, Home, Linkedin, NotebookTextIcon, Palette, Phone, Twitter, User } from 'lucide-react';
import ResponsiveComp from '../ResponsiveComp';
import clsx from 'clsx';
import {motion} from 'framer-motion'
const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "github":
            return <Github className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "linkdin":
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "twitter":
            return <Twitter className='w-full h-auto' strokeWidth={1.5} />
            break;
        case "resume":
            return <NotebookTextIcon className='w-full h-auto' strokeWidth={1.5} />
            break;

        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />
    }
}

const item = {
    hidden:{scale:0},
    show:{scale:1}
}
const NavLink = motion(Link)
function NavBtn({ x, y, label, icon, link, newTab ,labelDirn="right"}) {

    return (
        <ResponsiveComp>

            {
                ({ size }) => (
                    size && size >= 480 ?(
                        <div className='navigation absolute cursor-pointer ' style={{ transform: `translate(${x},${y})` }}>
                            <NavLink variants={item} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full  flex items-center justify-center 
                                    bg-background/20 border border-accent/30 
                                    border-solid backdrop-blur-[6px] shadow-sm shadow-yellow-200 animate-spin-slow-reverse 
                                    group-hover:pause' aria-label={label} href={link} name={label}>
                                <span className='peer relative w-14 h-14 p-4 group-hover:text-accent'>
                                    {getIcon(icon)}
                                </span>
                                <span className='absolute hidden peer-hover:block py-1 px-2  mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowwrap left-full'>{label}</span>
                            </NavLink>
                        </div> ): (
                            <>
                                <div className=' cursor-pointer  ' >
                                    <NavLink variants={item} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full  flex items-center justify-center 
                                            bg-background/20 border border-accent/30 
                                            border-solid backdrop-blur-[6px] shadow-sm shadow-yellow-200' aria-label={label} href={link} name={label}>
                                        <span className='peer  relative w-14 h-14 p-4 group-hover:text-accent'>
                                            {getIcon(icon)}
                                        </span>
                                        <span className={clsx('absolute hidden peer-hover:block py-1 px-2  mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowwrap left-full',labelDirn ==="left"?"right-full left-auto":"" )}>{label}</span>
                                    </NavLink>
                                </div>

                            </>
                        )
                )
            }
        </ResponsiveComp>
    )
}

export default NavBtn