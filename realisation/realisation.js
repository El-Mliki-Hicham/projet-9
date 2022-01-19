 var wmanager = new wManager ; 
var outputHTML = ""



function onSearch() {
    city = document.getElementById("inputCity").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`
    wmanager.fetchData(url)
    document.getElementById("inputCity").value = ""

  
    console.log(wmanager.weatherNew)



    outputHTML += "<table class = 'table table-dark table-striped' >"
    outputHTML += "<th>City</th>"
  outputHTML += "<th>Weather</th>"
  outputHTML += "<th>Wind-Speed </th>"  
  outputHTML += "<th>Id</th>"
    

   
    outputHTML += "<tr>";
   
    outputHTML += "<td>" + "  "+wmanager.weatherNew.name  +"</td>" ;
  
    outputHTML += "<td>" + wmanager.weatherNew.description  +"</td>" ;

    outputHTML += "<td>" + wmanager.weatherNew.wind +"</td>" ;
    
    outputHTML += "<td>" + wmanager.weatherNew.id +"</td>" ;


    outputHTML += "<tr>";

   

    

outputHTML += "</table>"

document.getElementById("divT").innerHTML = outputHTML


}