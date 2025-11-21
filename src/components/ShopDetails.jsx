import React, { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

const ShopDetails = ({ setShowShop }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const ref = useRef();

  const total = cart.reduce((sum, game) => sum + game.price, 0).toFixed(2);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowShop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowShop]);

  // Clear cart and hide shop after 2 sec
  const handleClear = () => {
    clearCart();
    setTimeout(() => setShowShop(false), 2000);
  };

  return (
    <div
      ref={ref}
      className="h-[100vh] bg-[#141212] text-white z-50 sm:w-1/4 w-2/3 fixed right-0 top-0 px-5 py-4 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-7 flex-shrink-0">
        <h1 className="text-3xl font-bold">{cart.length} games</h1>
        <p onClick={handleClear} className="cursor-pointer hover:underline">
          clear
        </p>
      </div>
  
      {/* Scrollable section */}
      <div className="flex-1 overflow-y-auto pr-1">
        {cart.length === 0 ? (
          <p className="text-gray-200">Your cart is empty.</p>
        ) : (
          cart.map((game) => (
            <div
              key={game.id}
              className="flex items-center justify-between bg-white/10 p-3 rounded-lg mb-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h1 className="font-semibold">{game.name}</h1>
                  <p className="text-sm opacity-80">₹{game.price}</p>
                </div>
              </div>
  
              <button
                onClick={() => removeFromCart(game.id)}
                className="text-sm text-red-300 hover:text-red-500"
              >
                remove
              </button>
            </div>
          ))
        )}
      </div>
  
      {/* Fixed bottom total */}
      <div className="border-t border-white/20 pt-3 flex-shrink-0 bg-[#141212]">
        <h2 className="text-xl font-semibold">Total: ₹{total}</h2>
      </div>
    </div>
  );
  
};

export default ShopDetails;
