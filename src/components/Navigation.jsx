import React from 'react'

const Navigation = () => {
  return (
    <div className='flex items-center justify-between px-5 bg-red-400 h-20'>

    
    <div className='flex items-center justify-between'>
        <img src="" alt="logo" />
        <h1>Game Haven</h1>
    </div>
                                    
    <div>
        <label htmlFor="searchGames" className='flex items-center gap-2'>
        <input type="search" name="searchGames" id="searchGames" placeholder='search games ..'   className="border-1 rounded-xl px-3 py-1 w-48 focus:w-72 hover:w-72 transition-all duration-500 outline-none"
        
        />
        <div className='p-1 rounded-xl border-1 bg-white/20'>
        <img className='h-5' src="/public/svgs/search.svg" alt="" />

        </div>
         </label>
    </div>

    <div className='flex items-center justify-between'>
        <div className=''>
        <img className='h-5 px-3 border-r-2 border-black' src="/public/svgs/add.svg" alt="addGames" />
        </div>
        <div className=''>
            <img className='h-5 px-3' src="/public/svgs/cart.svg" alt="cart" />
        </div>
    </div>
    
    
    </div>
  )
}

export default Navigation