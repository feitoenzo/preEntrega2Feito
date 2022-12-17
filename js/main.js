//ingreso de jugadores
alert(
  "Bienvenido al juego de dados, sus datos registrados se muestran al final de la partida"
);
const j1 = prompt("INGRESE EL PRIMER NOMBRE");
const j2 = prompt("INGRESE EL SEGUNDO NOMBRE");
//funcion "nombreJ" (para que imprima mis jugadores)
function nombreJ(nombre1, nombre2) {
  document.write("EL JUGADOR 1 ES: " + nombre1.toUpperCase());
  document.write("<br>EL JUGADOR 2 ES: " + nombre2.toUpperCase());
}

nombreJ(j1, j2);

//funcion suma (sumatoria de los 3 tiros de dado de cada participante)
function suma(tiro1, tiro2, tiro3) {
  var resultado = tiro1 + tiro2 + tiro3;
  alert("la suma de tus tiros es " + resultado);
  return resultado;
}

//funcion promedio (saca el promedio de la sumatoria de la funcion "suma")
function promedio(res) {
  let promedio = parseFloat(res / 3).toFixed(2);
  return promedio;
}

//empieza el juego con un sorteo, para saber quien juega primero)
alert("ACEPTAR PARA SORTEAR TURNOS, EL MAYOR NUMERO EMPIEZA.");
var min = 1;
var max = 6;
let numero1 = Math.floor(Math.random() * (max - min + 1) + min);
let numero2 = Math.floor(Math.random() * (max - min + 1) + min);
var primerTurno = "";
var segundoTurno = "";

//impresion de quien gano el sorteo
document.write("<br>Tiro sorteo de " + j1 + " || Resultado: " + numero1);
document.write("<br>Tiro sorteo de " + j2 + " || Resultado: " + numero2);
if (numero1 > numero2) {
  document.write("<br><br>JUEGA PRIMERO: " + j1.toUpperCase());
  alert("JUEGA PRIMERO: " + j1.toUpperCase());
  primerTurno = j1;
  segundoTurno = j2;
} else {
  document.write("<br><br>JUEGA PRIMERO: " + j2.toUpperCase());
  alert("JUEGA PRIMERO: " + j2.toUpperCase());
  primerTurno = j2;
  segundoTurno = j1;
}

//una vez otorgados los turnos, empieza el juego (jugador uno)
confirm(
  primerTurno.toUpperCase() +
    " sos el primero en jugar, aceptar para tirar tus dados."
);
let dado1 = Math.floor(Math.random() * (max - min + 1) + min);
let dado2 = Math.floor(Math.random() * (max - min + 1) + min);
let dado3 = Math.floor(Math.random() * (max - min + 1) + min);
alert(primerTurno.toUpperCase() + " tu primer tiro: " + dado1);
alert(primerTurno.toUpperCase() + " tu segundo tiro: " + dado2);
alert(primerTurno.toUpperCase() + " tu tercer tiro: " + dado3);
document.write(
  "<br>" +
    primerTurno +
    " tus dados fueron: <br>" +
    dado1 +
    "<br>" +
    dado2 +
    "<br>" +
    dado3
);
var resultado1 = suma(dado1, dado2, dado3);
var promedio1 = promedio(resultado1);
document.write(
  "<br>" + primerTurno.toUpperCase() + " tu promedio de tiro: " + promedio1
);

//turno jugador dos

confirm(
  segundoTurno.toUpperCase() +
    " sos el segundo en jugar, aceptar para tirar tus dados."
);
let dado4 = Math.floor(Math.random() * (max - min + 1) + min);
let dado5 = Math.floor(Math.random() * (max - min + 1) + min);
let dado6 = Math.floor(Math.random() * (max - min + 1) + min);
alert(segundoTurno.toUpperCase() + " tu primer tiro: " + dado4);
alert(segundoTurno.toUpperCase() + " tu segundo tiro: " + dado5);
alert(segundoTurno.toUpperCase() + " tu tercer tiro: " + dado6);
document.write(
  "<br>" +
    segundoTurno +
    " tus dados fueron: <br>" +
    dado4 +
    "<br>" +
    dado5 +
    "<br>" +
    dado6
);

//LLAMO A LAS FUNCIONES "SUMA" Y "PROMEDIO" PARA ALMACENAR SUS VALORES
var resultado2 = suma(dado4, dado5, dado6);
var promedio2 = promedio(resultado2);
document.write(
  "<br>" + segundoTurno.toUpperCase() + " tu promedio de tiro: " + promedio2
);

//RESULTADO:
if (resultado1 == resultado2) {
  alert("EMPATE!!");
  document.write("<br>EMPATE, AMBOS SON PERDEDORES :(");
} else {
  if (resultado1 > resultado2) {
    alert("EL GANADOR ES: " + primerTurno.toUpperCase());
    document.write(
      "<br>FELICITACIONES " +
        primerTurno.toUpperCase() +
        " SOS EL GANADOR CON UN TOTAL DE: " +
        resultado1
    );
  } else {
    alert("EL GANADOR ES: " + segundoTurno.toUpperCase());
    document.write(
      "<br>FELICITACIONES " +
        segundoTurno.toUpperCase() +
        " SOS EL GANADOR CON UN TOTAL DE: " +
        resultado2
    );
  }
}

//SE IMPRIME EN CONSOLA LAS ESTADISTICAS DE CADA JUGADOR
let persona1 = {
  nombre: primerTurno,
  sumaDeTiros: resultado1,
  promedioTiro: promedio1,
};

let persona2 = {
  nombre: segundoTurno,
  sumaDeTiros: resultado2,
  promedioTiro: promedio2,
};

//ARRAY PARA PROMEDIAR TODOS LOS TIROS
console.log(persona1);
console.log(persona2);

let pTotal = [dado1, dado2, dado3, dado4, dado5, dado6];
let sPT = pTotal[0] + pTotal[1] + pTotal[2] + pTotal[3] + pTotal[4] + pTotal[5];
let promedioFinal = parseFloat(sPT / 6).toFixed(2);
console.log(pTotal);
console.log("Promedio total de todos los tiros " + promedioFinal);
