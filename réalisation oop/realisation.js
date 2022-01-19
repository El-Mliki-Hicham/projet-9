var ville
async function Click() {
    var meteoManager = new MeteoManager()

    ville = document.getElementById("input").value ;

var url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`

meteoManager.fetchUrl(url)

}