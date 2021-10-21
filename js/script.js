
const kmPrice = 0.21;
const newCustomer = parseInt(prompt("Inserisci la tua età."));
const kmToDo = parseInt(prompt("Dicci quanti km hai intenzione di percorrere."));
let prizeForAge = 0;

let validValue= "true";
let errorMsg; 
let output;

if(isNaN(newCustomer) || isNaN(kmToDo)){
  validValue = false;
  errorMsg = 'Inserire un numero valido';
}

if(newCustomer < 0 || newCustomer > 120){
  validValue = false;
  errorMsg = 'Inserire un età credibile';
}

if(newCustomer < 18){
  prizeForAge = kmPrice * kmToDo * 0.80;
}else if (newCustomer >= 65){
  prizeForAge = kmPrice * kmToDo * 0.60;
}else{  
  prizeForAge = kmPrice * kmToDo;
}

prizeForAge = prizeForAge.toFixed(2);

console.log(prizeForAge);

output = 
`
  <p>Ecco il prezzo che ti abbiamo dedicato!<br>
  Siccome hai ${newCustomer} anni.<br>
  Paghi solo
  <strong>${prizeForAge}<strong>!!
`
;

if(validValue){
  document.getElementById("output").innerHTML = output;
}else{
  document.getElementById("output").innerHTML = errorMsg;
}

