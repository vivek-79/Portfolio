
'use client'
import React, { useEffect, useState } from 'react'

const createFireFly = () =>(
    {
        id:Math.random(),
        top:`${Math.random()*100}%`,
        left:`${Math.random()*100}%`,
        animationDuration:`${Math.random()*5 +5}s`
    }
)

function FireFlies() {

    const [FireFlies,setFireFlies] = useState([])

    useEffect(()=>{
        const addFireFly = ()=>{
            const newFireFly = createFireFly()
            setFireFlies((prev)=>[...prev.slice(-20),newFireFly])
        }

        const interval = setInterval(addFireFly,1000)

        return ()=> clearInterval(interval)
    })
    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
            {
                FireFlies.map((fly)=>(
                    <div key={fly.id} className='absolute rounded-full bg-fire-fly w-[10px] h-[10px] ' 
                    style={
                        {top:fly.top,
                            left:fly.left,
                            animation:`move ${fly.animationDuration} infinite alternate`
                        }
                        }>
                    </div>
                ))
            }
        </div>
    )
}

export default FireFlies