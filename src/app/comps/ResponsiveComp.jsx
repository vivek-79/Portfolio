


import React from 'react'
import useScreenSiz from './hooks/useScreenSiz'

function ResponsiveComp({children}) {

    const size = useScreenSiz()
  return (
    <>
    {children({size})}
    </>
  )
}

export default ResponsiveComp