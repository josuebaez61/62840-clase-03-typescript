"use strict";
console.log("Hello world from TS!");
console.log("Nuevo cambio!");
let edad = 30; // number
let nombre = "Naruto"; // string
let estaActivado = false; //  boolean
let calificacion = null; // null
let curso = undefined; // undefined
let cantidadAlumnos = 90;
let nombreProfesor = "Kakashi Sensei";
let estaAprobado = true;
let a = null;
let b = true;
let frutas = ["Manzana", "Banana", "Pera"];
let numerosYLetras = [1, 4, "L", "J"];
let nombreEdad = ["Martin", 90];
let calificaciones = [2, 4, 20];
let cualquierCosa = 30;
cualquierCosa = "Hola mundo!";
cualquierCosa = true;
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Alto"] = 100] = "Alto";
    Volumen[Volumen["Medio"] = 50] = "Medio";
    Volumen[Volumen["Bajo"] = 25] = "Bajo";
})(Volumen || (Volumen = {}));
let volumenMax = Volumen.Alto;
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
    // return nombre;
}
saludar("Martin");
saludar();
function sumar(a, b) {
    return a + b;
}
const restar = (a, b) => a - b;
const superheroe = {
    nombre: "Peter Parker",
    edad: 15,
    superpoderes: ["Trepar"],
};
