class MeteoManager {

#_meteoNew

get meteoNew(){
return this.#_meteoNew 
}

set meteoNew (value){

    this.#_meteoNew = value
}


fetchUrl(url) {
    var reponse = await fetch(url)
    var data = await reponse.json()


var meteo = new Meteo ()

meteo.ville = data.name
meteo.description = data.weather[0].description
meteo.wind = data.wind.speed
meteo.id = data.id



}












}