"use client";
import { isNumber } from "@/app/utils/isNumber.util";
import { StoreContext } from "@/store/StoreContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const { setFilter } = useContext(StoreContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      changeSearchTerm();
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeSearchTerm();
  };
  const changeSearchTerm = () => {
    if (!input || !isNumber(input)) {
      setFilter(null);
      setInput("");
      return;
    }
    setFilter(parseInt(input, 10));
  };

  return (
    <div className="flex flex-col items-center mb-2 mt-3">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white border border-[#4FC0D0] items-center h-11 rounded-3xl"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Buscar"
          className="placeholder-[#C5C5C5] text-sm rounded-3xl focus:outline-none px-4"
          onKeyDown={handleKeyDown}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="h-14 p-4 text-[#4FC0D0] cursor-pointer hover:scale-125 transition-transform duration-200" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
