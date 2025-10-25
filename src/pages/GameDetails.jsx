import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


const API_KEY = "29b2edac77fe4917812ca612c7b177d3";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();


  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        setGame(data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching game details:", err);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return (
      <p className="text-white text-xl text-center mt-10">Loading details...</p>
    );
  }

  if (!game) {
    return (
      <p className="text-white text-xl text-center mt-10">Game not found.</p>
    );
  }

  const handleAddToCart = () => {
    addToCart(game);
  };
  

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 sm:ml-[20%] sm:w-[78%] pt-40">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
      >
        ← Back
      </button>

      <div className="flex flex-col w-full gap-6">
        <img
          src={game.background_image_additional}
          alt={game.name}
          className="w-full  rounded-xl shadow-lg object-cover"
        />

        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <p className="text-gray-400">
            {game.description_raw || "No description available."}
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <p>
              <span className="text-white">Released:</span> {game.released}
            </p>
            <p>
              <span className="text-white">Rating:</span> {game.rating} / 5
            </p>
            <p>
              <span className="text-white">Platforms:</span>{" "}
              {game.platforms?.map((p) => p.platform.name).join(", ")}
            </p>
            <p>
              <span className="text-white">Genres:</span>{" "}
              {game.genres?.map((g) => g.name).join(", ")}
            </p>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-3 bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-lg text-white w-fit"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameDetails;
