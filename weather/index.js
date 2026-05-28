const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".input-container input");

searchBtn.addEventListener("click", () => {
  const city = input.value;
  const apiKey = "20da423906ccf27bec8c2d81c8f4a2eb";

  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`Temperature in ${city} is ${data.main.temp}°C`);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("City not found. Please try again.");
      });
  } else {
    alert("Please enter a city name.");
  }
});
