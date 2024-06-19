import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const Searchbar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        className="border-2 border-orange-400 focus:border-orange-600 focus:outline-none py-2 px-4 rounded-l-md shadow-sm w-80"
        placeholder="Craving something special?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-r-md shadow-md transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
