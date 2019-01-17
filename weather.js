class Weather {
    constructor(city) {
        this.apiKey = "34b5a499e359e0e3637b6bf96e85f065";
        this.cityName = city;
    }


    //Get ID from city name
    async getCityID() {
        const response = await fetch("city.list.json");

        const data = await response.json();

        let id = data.map(city => {
            if (city.name === this.cityName) {
                return city.id;
            }
        }).filter(id => id !== undefined);


        return id;
    }


    //Fetch weather from API
    async getWeather() {
        const data = await this.getCityID();

        const cityID = data[0];

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${this.apiKey}`);

        const weatherData = await response.json();

        return weatherData;
    }

    changeLocation(city) {
        this.cityName =  city;
    }
}

