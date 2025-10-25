import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='sm:pt-40 pt-30 sm:px-6 px-4 '>
       
       {/* <video className='hidden sm:block fixed top-0 left-0 w-full h-full z-[-1] object-cover' src="/videos/desktopVideoBG-2.mp4" autoPlay loop muted playsInline></video> */}
       <img src="/images/bgWallpaper.jpeg" alt="" className='hidden sm:block fixed top-0 left-0 w-full h-full z-[-1] object-cover' />
       <video className='block sm:hidden fixed top-0 left-0 w-full h-full z-[-1] object-cover' src="/videos/phoneVideoBg.mp4" autoPlay loop muted playsInline></video>
       
      <div className='flex w-full flex-col sm:flex-row gap-8'>
          
      <div className='sm:w-1/2 w-full flex flex-col gap-6 '>
       <h1 className='text-white sm:text-6xl text-5xl'>Step into Game Haven, the digital home for gamers!</h1>
          <p className='text-2xl text-white'>Shop top titles, explore new worlds, and level up your collection today.</p>
          <Link className='p-3 bg-white cursor-pointer text-center' to={'/explore'}>Explore</Link>
       </div>


       <div className='sm:w-1/2 w-full text-white text-2xl flex flex-col gap-2 justify-between sm:items-end'>
            <div className='p-5 h-full flex flex-col gap-5 justify-between backdrop-blur-xl shadow-2xl shadow-red-400 '>
            <h1 className='text-4xl font-bold pb-4'>Quick Navigation</h1>
           <div className=' p-2 bg-white text-black' >
            <div className="wrapperNav flex gap-3 items-center justify-center">
            <svg className='h-5'
                    viewBox="0 0 20 22"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path d="M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z"></path>
                    </g>
                  </svg>

                  <h1> Best of the year</h1>
            </div>
            
           </div>
           <div className=' p-2 bg-white text-black' >
            <div className="wrapperNav flex gap-3 items-center justify-center">
            <svg className="h-5"
                    viewBox="0 0 25 16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z"></path>
                  </svg>

                  <h1> All time top</h1>
            </div>
            
           </div>
           <div className=' p-2 bg-white text-black' >
            <div className="wrapperNav flex gap-3 items-center justify-center">
            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <path d="M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z"></path>
                  </svg>

                  <h1> Popular in 2025</h1>
            </div>
            
           </div>
           <div className=' p-2 bg-white text-black' >
            <div className="wrapperNav flex gap-3 items-center justify-center">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"></path>
                  </svg>

                  <h1>Last 30 days </h1>
            </div>
            
           </div>
           <div className=' p-2 bg-white text-[#221e1e]' >
            <div className="wrapperNav flex gap-3 items-center justify-center">
            <svg className="h-5"
                    viewBox="0 0 27 27"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 26.24V18.957H7.286V26.24H0ZM9.478 26.24V18.957H16.765V26.24H9.478ZM0 16.762V9.47799H7.286V16.762H0ZM9.478 16.762V9.47799H16.765V16.762H9.478ZM18.957 16.762V9.47799H26.243V16.762H18.957ZM0 7.28299V-1.14441e-05H7.286V7.28299H0ZM9.478 7.28299V-1.14441e-05H16.765V7.28299H9.478ZM18.957 7.28299V-1.14441e-05H26.243V7.28299H18.957Z"
                    ></path>
                  </svg>

                  <h1> Added</h1>
            </div>
            
           </div>
            </div>
       </div>


      </div>
    </div>
  )
}

export default Home