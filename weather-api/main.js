import './style.css'
const cityWeather = document.querySelector('#search-city');
const form = document.querySelector('#form');

const getWeather = (city) => {
    const temp = document.querySelector('#temp');
    const cloudy = document.querySelector('#cloudy');
    const humid = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const rain = document.querySelector('#rain');

    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e336786c16msh3fd447a915df8a9p1dfdb6jsn679b58b446ea',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	    }
    };

    fetch(url, options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        temp.textContent = `Temp: ${data.main.temp}`;
        cloudy.textContent = `cloudy: ${data.clouds.all}`;
        humid.textContent = `humidity: ${data.main.humidity}`;
        wind.textContent = `cloudy: ${data.wind.speed}`;
        rain.textContent = `cloudy: ${data.rain['1h']}`;
    })
}


const main = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeather(cityWeather.value)
    });
};
main();