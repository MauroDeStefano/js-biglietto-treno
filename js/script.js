
const kmPrice = 0.21;
const newCustomer = parseInt(prompt("Inserisci la tua età."));
const kmToDo = parseInt(prompt("Dicci quanti km hai intenzione di percorrere."));
const discountCode= prompt("aggiungi il tuo codice sconto");
let totalPrize = 0;

let validValue= "true";
let errorMsg; 
let output;
let discount ="false";

//Validators


if(isNaN(newCustomer) || isNaN(kmToDo)){
  validValue = false;
  errorMsg = 'Inserire un numero valido';
}

if(newCustomer < 0 || newCustomer > 110){
  validValue = false;
  errorMsg = 'Inserire un età credibile';
}



//This down is the discount based on the age

if(newCustomer < 18){
  totalPrize = kmPrice * kmToDo * 0.80;
}else if (newCustomer >= 65){
  totalPrize = kmPrice * kmToDo * 0.60;
}else{  
  totalPrize = kmPrice * kmToDo;
}

if((discountCode === "SCONTO20") && (newCustomer <= 20)){
  totalPrize = totalPrize * 0.8;
  discount = "true";
}


//fix the cent range

totalPrize = totalPrize.toFixed(2);

output =
`
  <p>Ecco il prezzo che ti abbiamo dedicato!<br>
  Siccome hai ${newCustomer} anni.<br>
  Paghi
  <strong>${totalPrize}€<strong>!!
`
;

if(validValue){
  document.getElementById("output").innerHTML = output;
}else{
  document.getElementById("output").innerHTML = errorMsg;
}


if(discountCode !== "SCONTO20" && discountCode !== ""){
  document.getElementById("discount").innerHTML = "Codice sconto non valido";
}else if(discountCode === ""){
  document.getElementById("discount").innerHTML = "Nessun codice sconto inserito";
}else if(discount === "false"){
  document.getElementById("discount").innerHTML = "Codice non valido per la tua fascia di età";
}else if(discount === "true"){
  document.getElementById("discount").innerHTML = "Codice sconto usato";
}