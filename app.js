const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear()
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`)
const yearDisplay = document.getElementById('yearDisplay')

const time = document.createElement('span')
time.classList.add('text-danger', 'lead')

time.innerHTML = ` ${currentYear} - ${newYearTime.getFullYear()} <small><b><i class="bi bi-hourglass-split"></i></b></small>`
yearDisplay.appendChild(time)

function updateCountdown(){
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const month = Math.floor(difference /1000 /60 /60 /24 /30.44)
    const day = Math.floor(difference /1000 /60 /60 /24) %30.44
    const hour = Math.floor(difference /1000 /60 /60 ) %24
    const minute = Math.floor(difference /1000 /60 ) %60
    const second = Math.floor(difference /1000) %60

    let m = month < 10 ? "0" + month : month
    let d = day < 10 ? "0" + day : day
    let h = hour < 10 ? "0" + hour : hour
    let min = minute < 10 ? "0" + minute : minute
    let s = second < 10 ? "0" + second : second

    months.innerHTML = Math.floor(m) 
    days.innerHTML = Math.floor(d) 
    hours.innerHTML = h
    minutes.innerHTML = min
    seconds.innerHTML = s
}
setInterval(updateCountdown, 1000)