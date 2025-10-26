import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopDetails from "../components/ShopDetails";
import { useCart } from "../context/CartContext";
import LeftSideBar from "../components/LeftSideBar";
import Menu from "../components/menu";

const Explore = () => {
  const API_KEY = "29b2edac77fe4917812ca612c7b177d3";
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedTop, setSelectedTop] = useState("");
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchGamesByTop = async () => {
      try {
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&top=10`
        );
        const data = await result.json();
        // console.log("Fetched games by top:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games by top ->", err);
      }
    };
    fetchGamesByTop();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`
        );
        const data = await result.json();
        // console.log("Fetched games:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games ->", err);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      try {
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&genres=${selectedGenre}`
        );
        const data = await result.json();
        // console.log("Fetched games by genre:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games by genre ->", err);
      }
    };
    fetchGamesByGenre();
  }, [selectedGenre]);

  useEffect(() => {
    const fetchGamesByPlatform = async () => {
      try {
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&platforms=${selectedPlatform}`
        );
        const data = await result.json();
        // console.log("Fetched games by platform:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games by platform ->", err);
      }
    };
    fetchGamesByPlatform();
  }, [selectedPlatform]);

  const navigate = useNavigate();

  const { cart, addToCart } = useCart();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log("clicked");
  };

  return (
    <div className=" sm:pt-20 pt-25 sm:px-6 px-4 flex flex-col">
      {/* 🧭 Sidebar — Fixed to the left */}

      <div className="sm:block hidden">
        <LeftSideBar
          setSelectedGenre={setSelectedGenre}
          setSelectedPlatform={setSelectedPlatform}
          setSelectedTop={setSelectedTop}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedTop={selectedTop}
        />
      </div>

      <div
        className="hover:bg-blue-300 fixed sm:hidden block p-2 bottom-10 right-10  h-8 w-8 rounded-full bg-[#a09898]"
        onClick={handleHamburgerClick}
      >
        <img src="/svgs/hamburger.svg" alt="" />
      </div>

      {hamburgerOpen && (
        <Menu
          onClose={() => setHamburgerOpen(false)}
          setSelectedGenre={setSelectedGenre}
          setSelectedPlatform={setSelectedPlatform}
          setSelectedTop={setSelectedTop}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedTop={selectedTop}
        />
      )}

      {/* 🎮 Games Section */}

      <div className="sm:ml-[22%] sm:w-[78%] min-h-screen overflow-y-auto p-6 border-1 border-[#4b4949] ">
        <h1 className="text-white text-3xl font-extralight mb-3 uppercase">
          {selectedGenre || selectedPlatform || selectedTop || "All Time Top"}
        </h1>

        <div className="flex flex-wrap">
          {games.length > 0 ? (
            games.map((game) => (
              <div
                key={game.id}
                className="card-1 bg-[#1d1c1c] m-3 rounded-xl w-105 text-white shadow-md hover:scale-105 transition"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  onClick={() => navigate(`/game/${game.id}`)}
                  className="rounded-lg h-64 w-full object-cover cursor-pointer"
                />
                <div className="details mt-2 p-3">
                  <div className="flex justify-between text-sm">
                    {cart.some((item) => item.id === game.id) ? (
                      <p className="text-green-400 font-semibold">Added ✓</p>
                    ) : (
                      <p
                        className="cursor-pointer hover:text-blue-400"
                        onClick={() => addToCart(game)}
                      >
                        Add to cart +
                      </p>
                    )}

                    <p>₹{Math.floor(game.rating * 1000) || 499}</p>
                  </div>
                  <div className="platforms text-xs text-gray-400 mt-1 cursor-pointer">
                    {game.parent_platforms
                      ?.map((p) => p.platform.name)
                      .join(", ") || "Unknown Platforms"}
                  </div>
                  <div
                    className="gameName mt-1 text-2xl font-bold cursor-pointer"
                    onClick={() => navigate(`/game/${game.id}`)}
                  >
                    {game.name}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // <p className="text-white text-xl">Loading games...</p>
            <div className="flex justify-center items-center w-full min-h-screen space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.33s]"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.66s]"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      </div>

      {/* 🛒 Shop Details */}
      {/* <ShopDetails
      /> */}
    </div>
  );
};

export default Explore;
