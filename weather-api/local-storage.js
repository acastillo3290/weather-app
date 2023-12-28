export const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
};

export const getLocalStorageKey = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const addFromLocal = (value) => {
    const temp = document.querySelector('#temp');
    const cloudy = document.querySelector('#cloudy');
    const humid = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const header = document.querySelector('#header');

    const data = JSON.parse(value);

    temp.textContent = `Temp: ${data.main.temp}`;
    cloudy.textContent = `cloudy: ${data.clouds.all}`;
    humid.textContent = `humidity: ${data.main.humidity}`;
    wind.textContent = `cloudy: ${data.wind.speed}`;
    header.textContent = `location: ${data.name}`;
};