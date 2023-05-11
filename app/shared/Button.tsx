import React from 'react'
import { FC } from 'react'

const Button:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div>
      <button className=' bg-cyan-600 text-lg  text-white py-4 px-4 shadow-xl'>
        {children}
      </button>
    </div>
  )
}

export default Button
