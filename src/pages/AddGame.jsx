import React, { useState } from "react";
import { useUserGames } from "../context/UserGameContext";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
  const [gameName, setGameName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [availability, setAvailability] = useState("");

  const { userAddedGames, setUserAddedGames } = useUserGames();

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = {
      id: Date.now(),
      name: gameName,
      price: price,
      availability: availability,
      background_image: imageURL,
      parent_platforms: [],
    };

    setUserAddedGames((prev) => [...prev, newGame]);

    setGameName("");
    setPrice("");
    setImageURL("");
    setAvailability("");

    navigate("/explore");
  };

  return (
    <div className="min-h-screen text-white p-6 pt-20 text-center flex items-center flex-col gap-5">
      <video
        className="fixed top-0 left-0 w-full h-full z-[-1] object-cover"
        src="/videos/addGameVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-85 sm:w-150 md:mt-25 lg:mt-5 mt-20 p-8 rounded-2xl backdrop-blur-xl
             bg-white/10 border border-white/20 shadow-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2 tracking-wide">
          Add New Game
        </h2>

        {/* Game Name */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-200 text-sm">Game Name</label>
          <input
            type="text"
            placeholder="Enter game name"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-200 text-sm">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-200 text-sm">Availability</label>
          <input
            type="text"
            placeholder="Enter availability"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-200 text-sm">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="p-3 rounded-lg bg-white/10 text-white border border-white/20 
                 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl w-full 
               text-white font-semibold shadow-md hover:shadow-blue-500/40
               transition-all mt-3"
        >
          Add Game
        </button>
      </form>
    </div>
  );
};

export default AddGame;
