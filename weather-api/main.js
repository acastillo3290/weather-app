import './style.css'
import { setLocalStorageKey, getLocalStorageKey, addFromLocal } from './local-storage';
const cityWeather = document.querySelector('#search-city');
const form = document.querySelector('#form');

const getWeather = (city) => {
    const temp = document.querySelector('#temp');
    const cloudy = document.querySelector('#cloudy');
    const humid = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const header = document.querySelector('#header');

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
        header.textContent = `location: ${data.name}`;
        addWeatherToStorage(data);
    })
};

const addWeatherToStorage = (value) => {
    const key = 'weather';
    setLocalStorageKey(key, value)
};

const restoreFromLocal = () => {
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
        addFromLocal( localStorage.getItem( localStorage.key( i ) ), form );
    }
};

const main = () => {
    restoreFromLocal()
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeather(cityWeather.value)
    });
};
main();