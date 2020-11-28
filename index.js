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