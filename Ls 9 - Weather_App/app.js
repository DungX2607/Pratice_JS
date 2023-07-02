const search = document.querySelector(".search");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const value = document.querySelector(".value");
const shortDesc = document.querySelector(".short-desc");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const humidity = document.querySelector(".humidity span");
const time = document.querySelector(".time");
const content = document.querySelector(".content");
const body = document.querySelector("body");

async function changeWeather(capitalSearch) {
    content.classList.remove("hide");
    let apiURL =  `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(apiURL).then(res=> res.json())

    if(data.cod == 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + ' (m)';
        wind.innerText = data.wind.speed + ' (m/s)';
        humidity.innerText = data.main.humidity + ' (%)';
        let temp = Math.round(data.main.temp);
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';

        body.setAttribute('class', 'hot');

        if(temp <= 28) {
            body.setAttribute('class', 'warm');
        }

        if (temp <= 20) {
            body.setAttribute('class', 'cool');
        }

        if (temp <= 10) {
            body.setAttribute('class', 'cold');
        }

    } else {
        content.classList.add("hide");
    }

}

// --------Tính giờ------------
let currentDate = new Date();

let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
let day = currentDate.getDate().toString().padStart(2, '0');
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let amOrPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

let currentTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;

time.innerText = currentTime;
// ----------------------------------


search.addEventListener("keypress", (e)=> {
    if(e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeather(capitalSearch);
    }
})
changeWeather('Ha Noi')