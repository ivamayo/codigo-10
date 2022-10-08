const nombres = ["Pepe", "Juan", "Luisa", "Maria", "Carlos"];

// cuantos datos hay en nombres: Podemos que el arreglo nombres tiene 5 elementos
// Tiene 5 elementos
// Hay una cosa llamada indice: Posicion de cada elemento y tiene como inicio el 0
console.log(nombres[0]); // Pepe
console.log(nombres[3]); // Maria
console.log(nombres[5]); // undefined

const edades = [18, 20, 22, 12];

console.log("Edades 1", edades);

const booleanos = [true, false, true, false];

// Funciones de array
// Funcion para agregar un elemento push
edades.push(34);
edades.push("Pepe");
edades.push(true);
edades.push(["Juan", "Luis"]);
console.log("Edades 2", edades);
console.log(edades[7][2]); // ["Juan, "Luis"]

// arrays multiples
const cursos = [
  ["React", "Angular", "Svelt", "Vue"],
  ["Laravel", "Sinfony", "Cake", ["poo", "java", "php", ["js", "css", "html"]]],
  ["Spring", "JHipster"],
];

console.log(cursos[1][3][3][1]);

cursos.unshift("React Native");
console.log("unshift", cursos);
cursos[1].unshift("Nextjs");
console.log("adsadsa", cursos);