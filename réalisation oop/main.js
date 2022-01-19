var city;
var outputHTMl


async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`;

    if (city) {
        weatherManager.fetchUrl(url).then(() => {
            display(weatherManager.weatherNew)
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined




}


function display(weatherNew) {
    document.getElementById('city').textContent = weatherNew.city
    document.getElementById('temp').textContent = weatherNew.temp + "" + "°C"


    document.getElementById('desc').textContent = weatherNew.description
    document.getElementById('country').textContent = weatherNew.humidity


}
outputHTMl+= "<img src ='http://openweathermap.org/img/wn/01n@2x.png' ></img> "

    document.getElementById('icon').innerHTML= outputHTMl