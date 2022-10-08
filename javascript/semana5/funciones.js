// Sintaxys: La forma en la que escribimos escribimos el codigo

// function sumar() {

//}
let n3 = 30;

function sumar() {
  // codigo
  let n1 = 10;
  let n2 = 20;
  console.log(n1 + n2 + n3);
}

let n4 = 40;

// console.log(n1);
console.log(n3);

let nombre = "Pepe";

// Recomendacion: Los nombres de la funciones deben ser verbos
function restar(n1, n2) {
  console.log(n1 - n2);
}

// Significa que cuando tengamos que llamar la funcion esta recibe 2 argumentos
// que son n1, n2
//llamar la funcion hace referencia a usar, porque una funcion cuando es
// creado solo se ejecutada cada que la llamemos

// Para usar la funcion solo debemos escribir el nombre de esta
restar(10, 50); // -40
restar(90, 100); // -10
restar(120, 30); // 90

function saludar(nombre) {
  return "Hola me llamo " + nombre; //
}

saludar("Pepe");
saludar("Juan");

// Ahora vamos a ver funcion que usan return
const edadMinima = 18;
function entrarAFiesta(edad) {
  // Si es es mayor a 18 podrar entrar si no no entra
  let resultado = false;

  if (edad >= edadMinima) {
    // Este return significa que si la condicion se cumple el valor que devuelva (retorne) sera true
    // cuando se ejecuta el return la funcion termina
    resultado = true;
  }

  return resultado;
}

const validacionDeEdad = entrarAFiesta(20); // false
console.log("Vaidacion de edad", validacionDeEdad);

function aumentarNumber(numero, aumento) {
  // En esta funcion vamos a programar que el numero aumente en una cantida x

  // operador de adicion
  //? numero = numero + aumento;
  // 10 + 20
  numero += aumento; // 30
  numero -= aumento; // 10
  numero *= aumento; // 200
  numero /= numero; // 1
  console.log(numero);
}

aumentarNumber(10, 20);

console.log("Funcion 2");
function aumentoDoble(numero, aumento) {
  // numero **= aumento; // 8
  numero %= aumento;
  console.log("aumentoDoble", numero);
}

aumentoDoble(2, 3);
aumentoDoble(8, 4);
aumentoDoble(12, 2);

function operadorDeCambio(numero1, numero2) {
  numero1 <<= numero2;
  // numero1 = numero1 << numero2
  console.log("operadorDeCambio", numero1);
}

operadorDeCambio(5, 20);

function operadoresLogicos(numero1, numero2) {
  // cuando tenemos un operador logico que sea
  // > < >= <= == === || siempre se retorna un true o false
  console.log(">", numero1 > numero2); // true
  console.log("<", numero1 < numero2); // false
  console.log("==", numero1 == numero2); // false
  // === vs ==
  console.log("==", "1" == 1); // true
  console.log("===", "1" === 1); // false
  console.log(typeof 41.3); // number
  console.log(typeof "hola"); // string
  console.log(typeof [1, 2, 3]); // object
}

operadoresLogicos(100, 50);