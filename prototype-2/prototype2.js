
var city = prompt()
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`

fetch (url)
    .then(function(reponse) {

return reponse.json()

})
.then(function(data){
    
    

    
    document.write(data.name )

     document.write(data.id )
   
    

})
