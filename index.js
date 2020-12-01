function timeUpdate(timestamp) {
    let now = new Date(timestamp)
    let hour = now.getHours()
    if (hour < 10) {
        hour = `0${hour}`
    }
    let min = now.getMinutes()
    if (min < 10) {
        min = `0${min}`
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[now.getDay()]
    return `Last Updated: ${day} ${hour}:${min}`
}

function formFunc(event) {
    event.preventDefault()
    let cityInput = document.querySelector("#city-input").value
    let displayCity = document.querySelector("#lagos")
    displayCity.innerHTML = cityInput
    search(cityInput)
}


function showCity(response) {
    let temperature = document.querySelector("#temp")
    let humidity = document.querySelector("#humidity")
    let wind = document.querySelector("#wind")
    let description = document.querySelector("#weather")
    let date = document.querySelector("#date")
    let icon = document.querySelector("#icon")

    temperature.innerHTML = `${Math.round(response.data.main.temp)}`
    humidity.innerHTML = `Humidty: ${Math.round(response.data.main.humidity)}%`
    wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}Km/h`
    description.innerHTML = `${response.data.weather[0].description}`
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    date.innerHTML = timeUpdate(response.data.dt * 1000)
    tempInCelsius = `${Math.round(response.data.main.temp)}`
}

function weatherForecast(response) {
    let forecastElement = document.querySelector("#weather-forecast")
    let forecast = response.data.list[0]



    console.log(forecastElement)
    forecastElement.innerHTML = `
<div class="col-2">
      <h6 class="forecast-info">21:00</h6>
      <img
       src="https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181100996/127533115-sunny-weather-icon-sun-icon-vector-illustration-flat.jpg"
       alt="weather-icon"
       id="forecast-icon"
       width="70px"
      />
      <div class="weather-forecast-temp forecast-info">
       <span class="strong">${Math.round(forecast.main.temp_max)}°</span> ${Math.round(forecast.main.temp_min)}°
                </div>
            </div>
        </div>`
}


function search(city) {
    let apiKey = "193afd01b965f6a8b5609e9278812cbe"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(showCity)

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(weatherForecast)
}

function tempInFarenheit(event) {
    event.preventDefault()
    let temperature = document.querySelector("#temp")
    celsius.classList.remove("active")
    farenheit.classList.add("active")
    temperature.innerHTML = Math.round((tempInCelsius * 9 / 5) + 32)
}

function celsiusFunc(event) {
    event.preventDefault()
    let temperature = document.querySelector("#temp")
    farenheit.classList.remove("active")
    celsius.classList.add("active")
    temperature.innerHTML = Math.round(tempInCelsius)
}

function ButtonClick(event) {
    event.preventDefault()
    let cityInput = document.querySelector("#city-input").value
    let displayCity = document.querySelector("#lagos")
    displayCity.innerHTML = cityInput

}


let searchButton = document.querySelector("#search-icon")
searchButton.addEventListener("click", ButtonClick)
let tempInCelsius = null

let form = document.querySelector("#form-submit")
form.addEventListener("submit", formFunc)

let farenheit = document.querySelector("#farenheit-temp")
farenheit.addEventListener("click", tempInFarenheit)

let celsius = document.querySelector("#celsius-temp")
celsius.addEventListener("click", celsiusFunc)

search("lagos")