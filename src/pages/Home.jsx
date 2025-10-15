import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='sm:pt-40 pt-30 sm:px-6 px-4 '>
       
       <video className='hidden sm:block fixed top-0 left-0 w-full h-full z-[-1] object-cover' src="/videos/desktopVideoBg.mp4" autoPlay loop muted playsInline></video>
       <video className='block sm:hidden fixed top-0 left-0 w-full h-full z-[-1] object-cover' src="/videos/phoneVideoBg.mp4" autoPlay loop muted playsInline></video>
       
      <div className='flex w-full flex-col sm:flex-row gap-8'>
          
      <div className='sm:w-1/2 w-full flex flex-col gap-6 '>
       <h1 className='text-white sm:text-6xl text-5xl'>Step into Game Haven, the digital home for gamers!</h1>
          <p className='text-2xl text-white'>Shop top titles, explore new worlds, and level up your collection today.</p>
          <Link className='p-3 bg-white cursor-pointer text-center' to={'/explore'}>Explore</Link>
       </div>


       <div className='sm:w-1/2 w-full text-white text-2xl flex flex-col gap-2 justify-between sm:items-end'>
            <div className='p-5 h-full flex flex-col gap-5 justify-between backdrop-blur-xl shadow-2xl shadow-amber-400'>
            <h1 className='text-4xl font-bold pb-4'>Quick NAvigation</h1>
           <div className=' p-2 bg-white text-black' >Best of the year</div>
           <div className=' p-2 bg-white text-black' >All time top</div>
           <div className=' p-2 bg-white text-black' >Popular in 2025</div>
           <div className=' p-2 bg-white text-black' >Last 30days</div>
           <div className=' p-2 bg-white text-black' >Added</div>
            </div>
       </div>


      </div>
    </div>
  )
}

export default Home