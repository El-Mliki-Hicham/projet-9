var outputHTML = ""

fetch ("./prototype1.json")

.then(function(reponse) {

return reponse.json()

})
.then(function(data){


    outputHTML += "<table>"
    
for (var i = 0; i < data.length; i++) {
   
    outputHTML += "<tr>";
   
    outputHTML += "<td>" + "  "+data[i].produit +"</td>" ;

    outputHTML += "<td>" + data[i].prix +"</td>" ;
    outputHTML += "<tr>";

    // outputHTML += "<tr>";
    // outputHTML += "<td>" + data[i].produit +"</td>" ;
    // outputHTML += "<tr>";

    
}
outputHTML += "</table>"

document.getElementById("divT").innerHTML = outputHTML
})
























 // document.write(data[i].prix  )


    //  document.write(data[i].produit )