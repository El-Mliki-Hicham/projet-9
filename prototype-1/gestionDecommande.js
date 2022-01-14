class gestionCommande{

#listProduit = [];

#listPrix = [];

get listProduit (){

return this.#listProduit

}

get listPrix (){

    return this.#listPrix
    
    }
    
    addProduit(pruduits){
        this.#listPrix.push(pruduits)
        this.#listProduit.push(produits)
    }

}