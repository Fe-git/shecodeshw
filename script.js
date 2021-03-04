function displayTemperature(response) {
  console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let conditionElement = document.querySelector("#condition")
let windElement = document.querySelector("#wind");
let iconElement = document.querySelector("#icon");

temperatureElement.innerHTML =Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
conditionElement.innerHTML = response.data.weather[0].description;
windElement.innerHTML = Math.round (response.data.wind.speed);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

let apiKey = "d02508008068065146939cb2f3fbdbe7";
let city = "Abuja";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);

function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#special");
form.addEventListener("submit", searching);

let h5 = document.querySelector("h5");
let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

h5.innerHTML = ` ${date} ${day} ${hours}:${minutes}`;
