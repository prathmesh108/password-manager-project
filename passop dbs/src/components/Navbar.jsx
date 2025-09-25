import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white  '>


      <div className=" flex justify-between items-center md:mycontainer ">



        <div className='logo font-bold text-white text-2xl'>
          <span className='text-green-500'>&lt;</span>
          <span>Pass</span>

          <span className='text-green-500'>OP/&gt;</span>

        </div>
        <ul>
          <li className='flex  gap-4 '>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>

        <button className='text-white bg-green-500  flex rounded-md items-center justify-around ring-white ring-1'>
          <img className='invert w-10 p-1  ' src="github.svg" alt="github" />
          <span className='font-bold px-2'>GitHub</span>
        </button>



      </div>


    </nav>
  )
}

export default Navbar
