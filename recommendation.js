export const getRecommendation = async (location, weather) => {
  const userPreferences = await getUserPreferences();
  const weatherConditions = weather.weather[0].main;
  const temperature = weather.main.temp - 273.15; // Convert from Kelvin to Celsius

  let recommendation = "walking";

  if (temperature < 0 || weatherConditions === "Rain" || weatherConditions === "Snow") {
    recommendation = "driving";
  } else if (userPreferences.bikingPreferred && temperature > 10 && weatherConditions === "Clear") {
    recommendation = "biking";
  }

  return recommendation;
};

const getUserPreferences = async () => {
  // Simulating fetching user preferences from storage
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bikingPreferred: true
      });
    }, 500);
  });
};
