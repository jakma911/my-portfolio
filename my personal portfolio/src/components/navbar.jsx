import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-black text-white font-sans'>
         {/* Navbar */}
         <nav className='flex items-center justify-between p-5'>
            <h1 className='text-yellow-400 font-bold text-xl'>PORTFOLIO</h1>
            <ul className='flex gap-6'>
                <li className='inline-block mx-4'><a href="#home">Home</a></li>
                <li className='inline-block mx-4'><a href="#about">About</a></li>
                <li className='inline-block mx-4'><a href="#projects">Projects</a></li>
                <li className='inline-block mx-4'><a href="#resume">Skill</a></li>
                <li className='inline-block mx-4'><a href="#contact">Contact</a></li>
            </ul>
         </nav>
      
    </div>
  )
}

export default Navbar
