console.log("Hello world from TS!");
console.log("Nuevo cambio!");

let edad = 30; // number
let nombre = "Naruto"; // string
let estaActivado = false; //  boolean
let calificacion = null; // null
let curso = undefined; // undefined

let cantidadAlumnos: number = 90;
let nombreProfesor: string = "Kakashi Sensei";
let estaAprobado: boolean = true;
let a: null = null;
let b: true = true;

let frutas: string[] = ["Manzana", "Banana", "Pera"];
let numerosYLetras: (number | string)[] = [1, 4, "L", "J"];
let nombreEdad: [string, number] = ["Martin", 90];

let calificaciones: Array<number> = [2, 4, 20];

let cualquierCosa: any = 30;
cualquierCosa = "Hola mundo!";
cualquierCosa = true;

enum Volumen {
  Alto = 100,
  Medio = 50,
  Bajo = 25,
}

let volumenMax: Volumen = Volumen.Alto;

function saludar(nombre?: string): void {
  console.log(`Hola ${nombre}`);
  // return nombre;
}

saludar("Martin");
saludar();

function sumar(a: number, b: number): number {
  return a + b;
}

const restar: (a: number, b: number) => number = (a: number, b: number) =>
  a - b;

interface Superheroe {
  nombre: string;
  edad: number;
  superpoderes: string[];
}

const superheroe: Superheroe = {
  nombre: "Peter Parker",
  edad: 15,
  superpoderes: ["Trepar"],
};
