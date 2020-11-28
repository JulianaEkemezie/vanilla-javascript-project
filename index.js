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