function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let conditionElement = document.querySelector("#condition")
let windElement = document.querySelector("#wind");
let humidityElement = document.querySelector("#humidity");
let iconElement = document.querySelector("#icon");

celciusTemperature = Math.round (response.data.main.temp);
temperatureElement.innerHTML =Math.round (celciusTemperature);
cityElement.innerHTML = response.data.name;
conditionElement.innerHTML = response.data.weather[0].description;
windElement.innerHTML = Math.round (response.data.wind.speed);
humidityElement.innerHTML = Math.round (response.data.main.humidity);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function check(city) {
let apiKey = "d02508008068065146939cb2f3fbdbe7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}  

function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  check(searchInput.value);
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

h5.innerHTML = `${date} ${day} ${hours}:${minutes}`;

function displayFahrenheitElement(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let fahrenheitElement = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round (fahrenheitElement);
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click",  displayFahrenheitElement);

function displayCelciusTemperature(event) {
  event.preventDefault();
  celciusLink.classList.add("active");
 fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML =  Math.round (celciusTemperature);
}
let celsiusTemperature = null;

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click",  displayCelciusTemperature);



function londonSearch(event) {
  event.preventDefault();
  check("london");
  let h1 = document.querySelector("h1");
  h1.innerHTML = "London";
}
let londonLink = document.querySelector("#london-button");
londonLink.addEventListener("click", londonSearch);


function parisSearch(event) {
  event.preventDefault();
  check("paris");
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Paris";
}
let parisLink = document.querySelector("#paris-button");
parisLink.addEventListener("click", parisSearch);

function abujaSearch(event) {
  event.preventDefault();
  check("abuja");
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Abuja";
}
let abujaLink = document.querySelector("#abuja-button");
abujaLink.addEventListener("click", abujaSearch);

function newYorkSearch(event) {
  event.preventDefault();
  check("new york");
  let h1 = document.querySelector("h1");
  h1.innerHTML = "New York";
}
let newYorkLink = document.querySelector("#ny-button");
newYorkLink.addEventListener("click", newYorkSearch);


check("Abuja");
