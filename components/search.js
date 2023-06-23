
"use client";


import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './weatherCard';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Replace with your OpenWeatherMap API key

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.length > 2) {
      setLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          const data = response.data;
          console.log(data); // Do something with the weather data
          setWeatherData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    // Fetch weather data for current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          )
          .then((response) => {
            console.log(response.data); // Do something with the weather data
            setWeatherData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="w-fit mx-auto mt-6">
      <input
        type="text"
        placeholder="Search a location..."
        value={query}
        onChange={handleInputChange}
        className="border border-gray-300 px-4 py-2 shadow-md rounded-full focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-10 py-2 bg-green-500 shadow-md text-white rounded-full ml-2"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default SearchComponent;
