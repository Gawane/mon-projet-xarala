function chooseYourProducts() {
    let btnP = document.getElementById("btnP");
    let produit = document.getElementById("produit")
    let nouveauElement = document.createElement("a");
    nouveauElement.href = "#produit";
    nouveauElement.textContent ="choisissez votre produit";
    btnP.appendChild(nouveauElement) ;

}
chooseYourProducts();