import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ShopDetails from "./ShopDetails";

const API_KEY = "29b2edac77fe4917812ca612c7b177d3";

const Navigation = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Shop panel
  const [showShop, setShowShop] = useState(false);

  //show Add GamesPage

  // Navbar scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length > 1) {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}&page_size=8`
        );
        const data = await res.json();
        setSuggestions(data.results || []);
      } else {
        setSuggestions([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelect = (id) => {
    if (id) navigate(`/game/${id}`);
    else navigate(`/explore?search=${searchQuery}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full h-20 px-5 flex justify-between items-center text-white z-50 transition-transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/" className="text-2xl sm:text-4xl font-medium">
          Game Haven
        </Link>

        {/* Search */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search games..."
            className="text-black px-3 py-1 bg-white sm:w-72 sm:focus:w-96 sm:hover:w-96 transition-all duration-500 outline-none rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-black/90 text-white p-2 max-h-40 overflow-y-auto rounded-lg">
              {suggestions.map((game) => (
                <li
                  key={game.id}
                  className="cursor-pointer hover:bg-gray-200 hover:text-black p-2"
                  onClick={() => handleSelect(game.id)}
                >
                  {game.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <img
            src="/svgs/add.svg"
            alt="add"
            className="h-5 pr-3 cursor-pointer invert border-r-2 border-black"
          />
          <img
            src="/svgs/cart.svg"
            alt="cart"
            className="h-5 cursor-pointer invert"
            onClick={() => setShowShop(true)}
          />
        </div>
      </div>

      {/* Cart Sidebar */}
      {showShop && <ShopDetails setShowShop={setShowShop} />}
    </>
  );
};

export default Navigation;
