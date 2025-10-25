import React, { useState } from 'react';

const AddGame = () => {
  const [gameName, setGameName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log
    console.log({ gameName, price, imageURL });
    // Later, you can send this to a backend or add to your cart/game list
    setGameName('');
    setPrice('');
    setImageURL('');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 pt-20">
      <h1 className="text-3xl font-bold mb-6">Add a New Game</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Game Name"
          className="p-2 rounded bg-gray-800 text-white"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="p-2 rounded bg-gray-800 text-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="p-2 rounded bg-gray-800 text-white"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded mt-2 w-fit"
        >
          Add Game
        </button>
      </form>
    </div>
  );
};

export default AddGame;
