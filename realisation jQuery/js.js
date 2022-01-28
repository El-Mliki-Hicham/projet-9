

var city

 var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric`
 
 city = $("#input").val();

$('#btn').click(function () { 

$.get(url, 
    function (data) {
        console.log(data)
        
    },
   
);
});