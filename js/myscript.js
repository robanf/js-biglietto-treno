do{
    var eta=prompt("Inserisci la tua età");
    
}while(isNaN(eta) == true)

do{
    var km=prompt("quanti km devi fare?");
    
}while(isNaN(km) == true)


var prezzo=km*0.21;

parseFloat(prezzo);

console.log(prezzo);


if(eta<18){

    prezzo=prezzo*0.8;
    document.getElementById('prezzof').innerHTML= "il tuo prezzo sarà="+prezzo.toFixed(2);

}else if(eta>65) {

    prezzo=prezzo*0.6;
    document.getElementById('prezzof').innerHTML= "il tuo prezzo sarà="+prezzo.toFixed(2);

}else {
    document.getElementById('prezzof').innerHTML= "il tuo prezzo sarà="+prezzo.toFixed(2);
}