const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);
const ui = new UI();


//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;

    weather.changeLocation(city);

    getWeather();

    storage.setLocationData(city);

    //Close modal
    $("#locModal").modal("hide");
});

function getWeather() {
    weather.getWeather()
    .then(data => ui.paint(data))
    .catch(error => console.log(error))
}
