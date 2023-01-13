const apiKey = "091407001ef812a094e745e66dde647b";

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  const cityInput = document.getElementById("city-input");
  const city = cityInput.value;
  cityInput.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data["main"]["temp"];
      const feelsLike = data["main"]["feels_like"];
      const humidity = data["main"]["humidity"];
      const pressure = data["main"]["pressure"];
      // const windspeed= data['']

      // get weather icon and description
      const weather = data["weather"][0];
      const iconUrl = `https://openweathermap.org/img/wn/${weather["icon"]}@2x.png`;
      const description = weather["description"];

      const weatherDataElement = document.getElementById("weather-data");
      weatherDataElement.innerHTML = `
        <p>The current temperature in ${city} is ${temperature.toFixed(2)}°C</p>
        <p>It feels like ${feelsLike.toFixed(2)}°C</p>
        <p>${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Air pressure: ${pressure} hPa</p>
      `;
      if (description.includes("sunny")) {
        document.body.style.backgroundColor = "yellow";
      } else if (description.includes("cloudy")) {
        document.body.style.backgroundColor = "gray";
      } else if (description.includes("rain")) {
        document.body.style.backgroundColor = "blue";
      }
    });
});


// const weatherDataElement = document.getElementById("weather-data");


