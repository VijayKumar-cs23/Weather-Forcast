const timeE1 =document.getElementryById('time');
const dateE1 =document.getElementryById('date');
const currentWeatherItemsE1 = document.getElementryById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('time-zone');
const currentTempE1 = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.geDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();

    
}, 1000);



