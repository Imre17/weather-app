class Forecast {
    constructor() {
        this.key = 'pCmZnArGHKvJqz1DsNHtvWhbiNJo5FHW';
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search;';
    }

    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        return { cityDets, weather }; //Object shorthand notation!!
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;

        const respons = await fetch(this.cityURL + query);
        const data = await respons.json();

        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURL + query);
        const data = await response.json();

        return data[0];
    }
}


