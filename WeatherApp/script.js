const apiKey = "4e2fbf1c3ab34e2ad18a87d2031b34ca";

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert('Please enter a city name.');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherCard").style.display = "block";
    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    alert("Error: " + error.message);
  }
}
