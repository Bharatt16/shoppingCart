import React from 'react'

const Explore = () => {
  return (
    <div className='sm:pt-40 pt-30 sm:px-6 px-4 flex'>

        <div className="categories h-screen w-1/5">
             <div className="category-1 flex flex-col gap-3">
           <h1 className='text-3xl font-bold text-white' >Your Games</h1>
                <ul className='text-white flex flex-col gap-3 '>
                  <li>Added Games</li>
                </ul>
             </div>
             <div className="category-2 flex flex-col gap-3 my-5">
              <h1 className='text-3xl font-bold text-white' >New Releases</h1>
              <ul className='text-white flex flex-col gap-3 '>
                <li>Last 30 days</li>
                <li>This Week</li>
                <li>Next Week</li>
              </ul>
             </div>
             <div className="category-3 flex flex-col gap-3 my-5">
               <h1 className='text-3xl font-bold text-white' >Top</h1>
                <ul className='text-white flex flex-col gap-3 '>
                  <li>Best of the year</li>
                  <li>Popular in 2025</li>
                  <li>All time top</li>
                </ul>
             </div>
             <div className="category-4 flex flex-col gap-3 my-5">
              <h1 className='text-3xl font-bold text-white' >Platforms</h1>
              <ul className='text-white flex flex-col gap-3 '>
                <li>PC</li>
                <li>PlayStation</li>
                <li>Xbox One</li>
                <li>Nintendo Switch</li>
                <li>IOS</li>
                <li>Android</li>
              </ul>
             </div>
             <div className="category-5 flex flex-col gap-3 my-5">
              <h1 className='text-3xl font-bold text-white' >Genres</h1>
              <ul className='text-white flex flex-col gap-3 '>
                <li>Action</li>
                <li>Strategy</li>
                <li>RPG</li>
                <li>Shooter</li>
                <li>Adventure</li>
                <li>Puzzle</li>
                <li>Racing</li>
                <li>Sports</li>
              </ul>
             </div>
        </div>


        <div className="gamesSection h-screen w-4/5 bg-blue-400 flex flex-wrap ">
             <div className="card-1 ">
                <img src="" alt="" />
                <div className="details flex gap-2">
                  <div className="flex justify-between">
                  <p>Add to cart +</p>
                   <p>Price</p>
                  </div>
                  <div className="platforms"></div>
                  <div className="gameName">Game Name</div>
                </div>
             </div>
             <div className="card-2"></div>
             <div className="card-3"></div>
             <div className="card-4"></div>
             <div className="card-5"></div>
             <div className="card-6"></div>
             <div className="card-7"></div>
             <div className="card-8"></div>
             <div className="card-9"></div>
             <div className="card-10"></div>
        
        
        </div>



    </div>
  )
}

export default Explore 