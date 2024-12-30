import React from 'react'
import { TbLogin } from "react-icons/tb";
const Navbar = () => {
  return    (
    <div className='fixed top-0 px-8 h-20 bg-[#e5e5e5] w-full flex justify-between items-center'>
     <div className=' flex gap-10 font-semibold items-center'>
        <a className='font-bold text-2xl'>News App</a>
        <a className='text-lg'>Home</a>
        <a className='text-lg'>Category 1</a>
        <a className='text-lg'>Category 2</a>
        <a className='text-lg'>Category 2</a>
        <a className='text-lg'>Category 4</a>
     </div>
        <div className='rounded-full h-10 w-10  overflow-hidden flex justify-center items-center'>
            <img  className = 'h-full w-full rounded-full object-fit' src="https://images.unsplash.com/photo-1519915826244-eedaddf5e2c6?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
       {/* <span className='h-full w-full block text-4xl'>< TbLogin/></span> */}
        </div>
    </div>
  )
}

export default Navbar