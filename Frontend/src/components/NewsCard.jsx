import React from 'react'

const NewsCard = () => {
  return (
   
    <div className="max-w-sm h-[26rem] rounded overflow-hidden shadow-lg bg-[#e5e5e5]">
      <img className="w-full h-40 object-cover" src='https://images.unsplash.com/photo-1519915826244-eedaddf5e2c6?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Card image" />
      <div className="p-2">
        <h2 className="text-2xl font-semibold text-gray-800 overflow-hidden text-ellipsis line-clamp-2">h Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos fugiat eligendi rem expedita! Quos officiis eos, consequuntur quas quaerat esse!</h2>
        <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis line-clamp-5 text-md">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet excepturi quisquam, possimus illo voluptates tempore cumque ratione fugit facere consequuntur.sit amet, consectetur adipisicing elit. Ipsa, doloremque! Quis suscipit quam fugit iure impedit eum sint nemo a!</p>
        <button className='bg-blue-400 px-4 py-2 rounded my-2 text-white font-semibold'>Read More</button>
      </div>
    </div>

  )
}

export default NewsCard