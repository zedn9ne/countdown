const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.countdown-box');
const items = document.querySelectorAll('.time h2');

// Set time and date dynamicly
let futureDate = new Date(2025, 9, 24, 0, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
let days = futureDate.getDay();

days = weekdays[futureDate.getDay()];
giveaway.textContent = `freiheit ist am ${days} , ${date} ${month} ${year} um ${hours}0:${minutes}0pm  `

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureDate - today;
    // console.log(t);

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // clculate all values

    let day = t / oneDay;
    day = Math.floor(day)
    let hour = Math.floor((t % oneDay) / oneHour);
    let mins = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values 
    const values = [day, hour, mins, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h1>Congratulation strong man i am proud of you;
        go ... <br>
        go and catch your drems.
        i love you


        'frankfurt im coming'
    </h1>`
    }
}
//  countdown 
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


// 1s = 1000ms
// 1m = 60s
// 1h = 60min
// 1d = 24hr