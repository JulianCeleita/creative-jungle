import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchBar = () => {
  return (
    <section>
      <div className="flex bg-white border border-[#4FC0D0] items-center h-11 rounded-3xl cursor-pointer">
        <input
          type="text"
          placeholder="Buscar"
          className="placeholder-[#C5C5C5] rounded-3xl focus:outline-none px-4"
        />
        <MagnifyingGlassIcon className="h-14 p-4 text-[#4FC0D0]" />
      </div>
    </section>
  );
};

export default SearchBar;
