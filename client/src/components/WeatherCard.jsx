const WeatherCard = ({ data }) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">{data.city}</h2>
            <img src={data.icon} alt="Weather icon" className="mx-auto my-2 w-20 h-20" />
            <p className="text-lg font-medium text-gray-600">Temperature: <span className="font-bold">{data.temperature}°C</span></p>
            <p className="text-lg text-gray-600">Condition: {data.condition}</p>
            <p className="text-lg text-gray-600">Humidity: {data.humidity}%</p>
            <p className="text-lg text-gray-600">Wind Speed: {data.windSpeed} m/s</p>
        </div>
    );
};

export default WeatherCard;
