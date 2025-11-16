import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopDetails from "../components/ShopDetails";
import { useCart } from "../context/CartContext";
import LeftSideBar from "../components/LeftSideBar";
import Menu from "../components/menu";
import { useUserGames } from "../context/UserGameContext";
import { useLocation } from "react-router-dom";

const Explore = () => {
  const API_KEY = "29b2edac77fe4917812ca612c7b177d3";
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedTop, setSelectedTop] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState(false);



  const { userAddedGames } = useUserGames();
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`
        );
        const data = await result.json();
        // console.log("Fetched games:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games ->", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&genres=${selectedGenre}`
        );
        const data = await result.json();
        // console.log("Fetched games by genre:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games by genre ->", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGamesByGenre();
  }, [selectedGenre]);

  useEffect(() => {
    const fetchGamesByPlatform = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&platforms=${selectedPlatform}`
        );
        const data = await result.json();
        // console.log("Fetched games by platform:", data.results);
        setGames(data.results);
      } catch (err) {
        console.log("Error fetching games by platform ->", err);
      } finally {
        setLoading(false);
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



  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const jump = params.get("jump");
  
  useEffect(() => {
    if (!jump) return;
  
    // RESET EVERYTHING FIRST
    setSelectedGenre("");
    setSelectedPlatform("");
    setSelectedTop("");
    setSelectedCategory("");
  
    // PLATFORM
    if (jump.startsWith("platform-")) {
      const id = jump.split("-")[1];
      setSelectedPlatform(Number(id));
      return;
    }
  
    // TOP FILTERS
    if (jump === "all_time_top") {
      setSelectedTop("all_time_top");
      return;
    }
  
    if (jump === "popular-2025") {
      setSelectedTop("popular_in_2025");
      return;
    }
  
    // NEW RELEASES (if you implement later)
    if (jump === "last-30-days") {
      setSelectedTop("last_30_days");
      return;
    }
  
    // ADDED
    if (jump === "added") {
      setSelectedCategory("added");
      return;
    }
  
    // GENRE (MUST BE LAST - and ONLY genre)
    setSelectedGenre(jump);
  
  }, [jump]);
  
  




  //To change the title of the explore section
  function getDisplayName() {
    const platforms = {
      4: "PC",
      187: "PlayStation",
      1: "Xbox One",
      7: "Nintendo Switch",
      3: "iOS",
      21: "Android",
    };
  
    const genres = {
      action: "Action",
      strategy: "Strategy",
      adventure: "Adventure",
      "role-playing-games-rpg": "RPG",
      shooter: "Shooter",
      puzzle: "Puzzle",
      racing: "Racing",
      sports: "Sports",
    };
  
    const top = {
      best_of_the_year: "Best of the year",
      popular_in_2025: "Popular in 2025",
      all_time_top: "All Time Top",
    };
  
    if (selectedCategory === "added") return "Added Games";
    if (genres[selectedGenre]) return genres[selectedGenre];
    if (platforms[selectedPlatform]) return platforms[selectedPlatform];
    if (top[selectedTop]) return top[selectedTop];
  
    return "All Time Top";
  }
  



        // Use added games OR fetched games depending on selected category
        const displayedGames = selectedCategory === "added" ? userAddedGames : games;

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
          setSelectedCategory={setSelectedCategory}   
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
          setSelectedCategory={setSelectedCategory}   
        />
      )}

      {/* 🎮 Games Section */}

      <div className="sm:ml-[22%] sm:w-[78%] min-h-screen overflow-y-auto p-6 border-1 border-[#4b4949] ">
        <h1 className="text-white text-3xl font-extralight mb-3 uppercase">
          {getDisplayName()}
        </h1>



        <div className="flex flex-wrap">
          {loading ? (
            // <p className="text-white text-xl">Loading games...</p>
            <div className="flex justify-center items-center w-full min-h-screen space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.33s]"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.66s]"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          ) : (
            displayedGames.map((game) => (
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
