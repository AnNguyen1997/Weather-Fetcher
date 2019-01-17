class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.pressure = document.getElementById("w-pressure");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}°F / ${((weather.main.temp - 32) * 5/9).toFixed(2)}°C`;
        this.icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} miles/hour, at ${weather.wind.deg} deg`
    }
}
