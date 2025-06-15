import SearchIcon from '../Icons/SearchIcon';

function NavBar() {
  return (
    <nav className='flex flex-row-reverse justify-around border-b-4 p-4 max-lg:block'>
      <section className='flex gap-6 max-lg:block max-lg:mb-6'>
        <button className='bg-blue-800 text-white border-2 p-2 rounded-md max-lg:mr-4'>Sell your item</button>
        <button className='border-blue-400 border-2 p-2 rounded-md'>Log in/Sign up</button>
      </section>
      <section>
        <input type="text" placeholder='Search for items' className='w-[700px] size-12 border-2 rounded-md bg-[#FFCFCF] p-4 max-lg:w-96 max-md:w-72 max-sm:w-64' />
        <button className='w-12 h-12 border-y-[#FFCFCF] border-r-[#FFCFCF] border-2 p-4 rounded-md'><SearchIcon /></button>
      </section>

    </nav>
  )
}

export default NavBar;
