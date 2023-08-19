import React from "react";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-14 mb-2">
      <h1 className="text-[#164B60] text-3xl font-bold mb-6">
        Creative{" "}
        <span className="w-28 h-14 bg-[#A2FF86] rounded-2xl p-3">jungle</span>
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
