import React from 'react'

const Navigation = () => {
  return (
    <div className='text-white flex items-center justify-between px-5 h-20 absolute w-full'>

    
    <div className='flex items-center justify-between'>
        <img src="" alt="logo" />
        <h1 className='sm:text-4xl font-medium '>Game Haven</h1>
    </div>
                                    
    <div>
        <label htmlFor="searchGames" className='flex items-center gap-2'>
        <input type="search" name="searchGames" id="searchGames" placeholder='search games ..'   className="text-black bg-white border-1 px-3 py-1 w-48 sm:focus:w-72 sm:hover:w-72 transition-all duration-500 outline-none placeholder-gray-800"
        
        />
        <div className='sm:p-1 p-3 rounded-xl border-1  bg-black/20 '>
        <img className='sm:h-5 ' src="/svgs/search.svg" style={{ filter: "brightness(0) invert(1)" }} alt="" />

        </div>
         </label>
    </div>

    <div className='flex items-center justify-between'>
        <div className=''>
        <img className='h-5 px-3 border-r-2 border-black' src="/svgs/add.svg" style={{ filter: "brightness(0) invert(1)" }} alt="addGames" />
        </div>
        <div className=''>
            <img className='h-5 px-3' src="/svgs/cart.svg" style={{ filter: "brightness(0) invert(1)" }} alt="cart" />
        </div>
    </div>
    
    
    </div>
  )
}

export default Navigation