
const kmPrice = 0.21;
const newCustomer = parseInt(prompt("Inserisci la tua età."));
const kmToDo = parseInt(prompt("Dicci quanti km hai intenzione di percorrere."));
let prizeForAge = 0;

if(newCustomer < 18){
  prizeForAge = kmPrice * kmToDo * 0.80;
}else if (newCustomer >= 65){
  prizeForAge = kmPrice * kmToDo * 0.60;
}else{  
  prizeForAge = kmPrice * kmToDo;
}

prizeForAge = prizeForAge.toFixed(2);

console.log(prizeForAge);

document.getElementById("output").innerHTML = 
`

  ${prizeForAge}
`
;

