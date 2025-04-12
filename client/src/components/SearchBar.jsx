import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city.trim()) onSearch(city);
    };

    return (
        <div className="flex justify-center gap-3 p-4">
            <input
                type="text"
                placeholder="Enter city name"
                className="px-4 py-2  bg-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
