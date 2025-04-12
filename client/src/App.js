import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        setError("");
        try {
            const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
            setWeather({ ...response.data, city });
        } catch (err) {
            setError("City not found. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
            <h1 className="text-4xl font-bold my-4">Real-Time Weather Dashboard</h1>
            <SearchBar onSearch={fetchWeather} />
            {error && <p className="text-red-500">{error}</p>}
            {weather && <WeatherCard data={weather} />}
        </div>
    );
};

export default App;
