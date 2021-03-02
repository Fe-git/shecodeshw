//function displayTemperature(response) {}


let apiKey = "420b6d538c4331867848a78a15adc661";
let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric';
console.log(apiUrl);

//axios.get(apiUrl).then(displayTemperature);

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
