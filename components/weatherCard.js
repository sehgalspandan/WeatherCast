"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fetchWeather = async (latitude, longitude) => {
  const apiKey = 'dc1d6a6ef2fd65bbfe45f9011d3e23c3';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getLocation()
      .then((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        return fetchWeather(latitude, longitude);
      })
      .then((data) => {
        setWeatherData({
          location: data.name,
          currentTemp: Math.round(data.main.temp),
          minTemp: Math.round(data.main.temp_min),
          maxTemp: Math.round(data.main.temp_max),
          rainChance: data.clouds.all,
          description: data.weather[0].description,
          feelsLike: data.main.feels_like,
          feelsLike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          city: data.name,
          country: data.sys.country,
          weatherIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg w-96 mx-auto mt-5 p-4 shadow-md"
        >
          <div className="flex items-center mb-4">
            <img src={weatherData.weatherIcon} alt="Weather Icon" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">{weatherData.currentTemp}°C</h3>
              <p className="text-gray-500">Min/Max: {weatherData.minTemp}°C / {weatherData.maxTemp}°C</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-500">Humidity: {weatherData.humidity}%</p>
            <p className="text-gray-500">Feels Like: {weatherData.feelsLike}°C</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">{weatherData.description}</p>
            <p className="text-gray-500 mx-2">•</p>
            <p className="text-gray-500">{weatherData.city}, {weatherData.country}</p>
          </div>
        </motion.div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherCard;