export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error)
      );
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
};

export const getWeatherData = async (latitude, longitude) => {
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  return response.json();
};
