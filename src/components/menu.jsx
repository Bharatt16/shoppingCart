import React from "react";
import LeftSideBar from "./LeftSideBar";

const Menu = ({
  setSelectedGenre,
  setSelectedPlatform,
  setSelectedTop,
  selectedGenre,
  selectedPlatform,
  selectedTop,
  onClose, // 👈 function to close menu
}) => {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-80">
      {/* 🧭 LeftSideBar */}
      <div className="relative w-3/4 sm:w-1/3 bg-[#1c1c1c] text-white p-5 shadow-2xl animate-slideIn">
        {/* ✖️ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <LeftSideBar
          setSelectedGenre={setSelectedGenre}
          setSelectedPlatform={setSelectedPlatform}
          setSelectedTop={setSelectedTop}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedTop={selectedTop}
        />
      </div>

      {/* 🔶 Click outside to close */}
      <div
        onClick={onClose}
        className="flex-1 backdrop-blur-sm cursor-pointer"
      ></div>
    </div>
  );
};

export default Menu;
