var numero = prompt("Dime un número");

var numero1=Math.floor((Math.random() * 100) +1);;

while (numero!=numero1) {

  if(numero1>numero) {
    alert("Te quedaste corto");
    var numero = prompt("Dime otro número");
  }

  else if(numero1<numero) {
    alert("Te pasaste");
    var numero = prompt("Dime otro número");
  }
}

if (numero=numero1) {
  alert("Acertaste");
}
