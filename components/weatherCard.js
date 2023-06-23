"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WeatherCard = ({ weatherData }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (weatherData) {
      setLocation({
        currentTemp: Math.round(weatherData.main.temp),
        minTemp: Math.round(weatherData.main.temp_min),
        maxTemp: Math.round(weatherData.main.temp_max),
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        city: weatherData.name,
        country: weatherData.sys.country,
        weatherIcon: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
      });
    }
  }, [weatherData]);

  return (
    <div>
      {location ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg w-96 mx-auto mt-5 p-4 shadow-md"
        >
          <div className="flex items-center mb-4">
            <img src={location.weatherIcon} alt="Weather Icon" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">{location.currentTemp}°C</h3>
              <p className="text-gray-500">
                Min/Max: {location.minTemp}°C / {location.maxTemp}°C
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-500">Humidity: {location.humidity}%</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">{location.description}</p>
            <p className="text-gray-500 mx-2">•</p>
            <p className="text-gray-500">
              {location.city}, {location.country}
            </p>
          </div>
        </motion.div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherCard;
