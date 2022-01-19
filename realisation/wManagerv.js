class wManager {

weatherNew;

async fetchData(url){
fetch (url)
    .then(function(reponse) {

return reponse.json()

})
.then(function(data){
var weather = new Weather();
weather.name = data.name
console.log(weatherNew.name)
=

this.weatherNew = weather 


})
}
}