const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/weather", async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City is required" });

    const API_KEY = process.env.WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(URL);
        const { main, weather, wind } = response.data;
        res.json({
            temperature: main.temp,
            condition: weather[0].main,
            icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
            humidity: main.humidity,
            windSpeed: wind.speed,
        });
    } catch (error) {
        res.status(404).json({ error: "City not found" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
