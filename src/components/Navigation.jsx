import React , { useState , useEffect}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Navigation = () => {
  const API_KEY = "29b2edac77fe4917812ca612c7b177d3";


  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);



  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);



 useEffect(()=>{
  const delayDebounce = setTimeout(async()=>{
    if(searchQuery.trim().length>1){
      try{
        const result = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}&page_size=5`);
        const data = await result.json()
        console.log( "search suggestions ->", data.results);
        setSuggestions(data.results || []);
      } catch (err) {
        console.log("Error fetching search suggestions ->", err);
      }
    }
  }, 500);

  return () => clearTimeout(delayDebounce);

}, [searchQuery]);


const navigate = useNavigate();
const { id } = useParams();

const handleSelect = (id) => {
  if(id){
    navigate(`/game/${id}`);
  } else {
    navigate(`/explore?search=${searchQuery}`);
  }
  setSearchQuery("");
  setSuggestions([]);
};



useEffect(() => {
  const handleClickOutside = () => setSuggestions([]);
  window.addEventListener("click", handleClickOutside);
  return () => window.removeEventListener("click", handleClickOutside);
}, []);



  return (
    <div className={`text-white flex items-center justify-between px-5 h-20 fixed w-full transition-transform ${isVisible? "translate-y-0" : "-translate-y-full"} `}>

      <Link to={'/'} className='flex items-center justify-between'>
      {/* <img src="" alt="logo" /> */}
      <h1 className='sm:text-4xl font-medium '>Game Haven</h1>
      </Link>

                                    
    <div>
        <label htmlFor="searchGames" className='flex items-center gap-2'>
          <div className='relative'>
              <input type="search" name="searchGames" id="searchGames" placeholder='search games ..'   className="text-black bg-white border-1 px-3 py-1 sm:w-72 sm:focus:w-96 sm:hover:w-96 transition-all duration-500 outline-none placeholder-gray-800 "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
              {suggestions.length > 0 && (
                <ul className='absolute top-full left-0 w-full bg-black/20 text-white shadow-md rounded-lg p-2 max-h-40 overflow-y-auto'>
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.id} onClick={() => handleSelect(suggestion.name)} className='p-2 hover:bg-gray-100 text-white hover:text-black cursor-pointer'>{suggestion.name}</li>
                  ))}
                </ul>
              )}
              </div>
              
        <div onClick={() => handleSelect(id)} className='sm:p-1 p-3 rounded-xl border-1  bg-black/20 '>
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