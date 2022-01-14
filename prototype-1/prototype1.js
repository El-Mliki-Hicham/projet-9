fetch ("./prototype1.json")

.then(function(reponse) {

return reponse.json()

})
.then(function(data){
    
for (var i = 0; i < data.length; i++) {
    document.write(data[i].prix  )
     document.write(data[i].produit )
   
    
}
})
