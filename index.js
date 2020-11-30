function timeUpdate(timestamp) {
    let now = new Date(timestamp)
    let hour = now.getHours()
    let min = now.getMinutes()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[now.getDay()]
    return `Last Updated: ${day} ${hour}:${min}`
}


//select form
// add event
//select type area
//set value
//select display area
// change innerhtml to value set

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
    icon.setAttribute("src", `http://openweathermap.org/img/wn/04d@2x.png`)
    date.innerHTML = timeUpdate(response.data.dt * 1000)
    tempInCelsius = `${Math.round(response.data.main.temp)}`
}

function search(city) {
    let apiKey = "193afd01b965f6a8b5609e9278812cbe"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(showCity)
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