import React from "react";
import LeftSideBar from "./LeftSideBar";

const Menu = ({
  setSelectedGenre,
  setSelectedPlatform,
  setSelectedTop,
  selectedGenre,
  selectedPlatform,
  selectedTop,
  onClose,
  setSelectedCategory,
  selectedCategory
}) => {
  
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-80">

      {/* Sidebar panel */}
      <div
        className="relative w-3/4 sm:w-1/3 bg-[#1c1c1c] text-white p-5 shadow-2xl animate-slideIn overflow-y-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <LeftSideBar
          setSelectedGenre={(g) => {
            setSelectedGenre(g);
            onClose();
          }}
          setSelectedPlatform={(p) => {
            setSelectedPlatform(p);
            onClose();
          }}
          setSelectedTop={(t) => {
            setSelectedTop(t);
            onClose();
          }}
          setSelectedCategory={(c) => {
            setSelectedCategory(c);
            onClose();
          }}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedTop={selectedTop}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* click outside to close */}
      <div
        onClick={onClose}
        className="flex-1 backdrop-blur-sm cursor-pointer"
      ></div>
    </div>
  );
};

export default Menu;
