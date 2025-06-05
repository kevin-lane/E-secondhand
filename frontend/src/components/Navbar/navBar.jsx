import React from 'react'

function NavBar() {
  return (
    <nav className='w-screen flex justify-around border-b-4 p-4'>
      <section>
        <input type="text" placeholder='Search for items' className='w-[700px] size-12 border-2 rounded-md bg-[#FFCFCF] p-4' />
        <button className='border-[#FFCFCF] border-2 p-2 rounded-md'>Search</button>
      </section>
      <section className='flex gap-6'>
        <button className='bg-blue-800 text-white border-2 p-2 rounded-md'>Sell your item</button>
        <button className='border-blue-400 border-2 p-2 rounded-md'>Log in/Sign up</button>
      </section>
    </nav>
  )
}

export default NavBar;
