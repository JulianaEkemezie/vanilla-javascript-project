let now = new Date()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()]
let hour = now.getHours()
if (hour < 10) {
    `0${hour}`
}
let min = now.getMinutes()
if (min < 10) {
    `0${min}`
}
let date = document.querySelector("#date")
date.innerHTML = `Last Updated: ${day} ${hour}:${min}`

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
}
let form = document.querySelector("#form-submit")
form.addEventListener("submit", formFunc)

function showCity(response) {

}


let city = "Paris"
let apiKey = "193afd01b965f6a8b5609e9278812cbe"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(showCity)