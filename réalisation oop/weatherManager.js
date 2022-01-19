class WeatherManager {
    #_weatherNew;
  

    get weatherNew() {
        return this.#_weatherNew
    }

    set weatherNew(value) {
        this.#_weatherNew = value
    }

 

    async fetchUrl(url) {

        var response = await fetch(url)
        var data = await response.json()
     

        var weather = new Weather()
        weather.city = data.name
        weather.description = data.weather[0].main
        weather.iconCode = data.weather[0].icon
        weather.temp = data.main.temp
        weather.country = data.main.country
        weather.humidity = data.main.humidity
        this.#_weatherNew = weather

    }
}