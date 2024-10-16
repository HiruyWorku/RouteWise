import React, { useState, useEffect } from 'react';
import { getRecommendation } from './recommendation';
import './App.css';

const App = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [mode, setMode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Fetch weather data
        fetchWeather(latitude, longitude);
      }, () => {
        setError("Unable to retrieve your location");
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError("Failed to fetch weather data");
    }
  };

  const handleRecommendation = async () => {
    if (location && weather) {
      const recommendedMode = await getRecommendation(location, weather);
      setMode(recommendedMode);
    }
  };

  return (
    <div className="App">
      <h1>RouteWise: Your Travel Companion</h1>
      <div>
        {error ? (
          <p>{error}</p>
        ) : location && weather ? (
          <>
            <p>Location: {location.latitude}, {location.longitude}</p>
            <p>Weather: {weather.weather[0].description}</p>
            <button onClick={handleRecommendation}>Get Travel Recommendation</button>
            {mode && <p>Recommended Mode: {mode}</p>}
          </>
        ) : (
          <p>Loading location and weather...</p>
        )}
      </div>
    </div>
  );
};

export default App;
