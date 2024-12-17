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
const batman = {
    nombre: "Batman",
    edad: 40,
    superpoderes: ["Rico"],
};
class Producto {
    constructor(precio, marca, descripcion, id, nombre) {
        this.precio = precio;
        this.marca = marca;
        this.descripcion = descripcion;
        this.id = id;
        this.nombre = nombre;
    }
}
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
class Persona2 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const personaA = new Persona2("Marilu", "Dominguez");
personaA.nombre;
const ps5 = new Producto(999, "Sony", "Ps5 para jugar con tus amigos", 4, "Playstation 5");
const pcGamer = new Producto(999, "Cualquiera", "PC GAMER 16GB RAM 1TB", 9, "PC GAMER");
class Carrito {
    constructor() {
        this.productos = [];
    }
    listarProductos() {
        console.log(this.productos);
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}
class Ecommerce {
    constructor() {
        this.productos = [ps5, pcGamer];
        this.carrito = new Carrito();
    }
    buscarProducto(texto) {
        return this.productos.find((p) => p.nombre.includes(texto));
    }
}
const app = new Ecommerce();
app.carrito.agregarProducto(pcGamer);
class Perro {
    constructor(cantidadPatas, tienePelo) {
        this.cantidadPatas = cantidadPatas;
        this.tienePelo = tienePelo;
    }
}
const firulais = new Perro(4, true);
class Humano {
    constructor(estatura, colorOjos, peso, nombre) {
        this.estatura = estatura;
        this.colorOjos = colorOjos;
        this.peso = peso;
        this.nombre = nombre;
    }
    respirar() { }
}
class Usuario extends Humano {
    constructor(estatura, colorOjos, peso, nombre, contrasena, email) {
        super(estatura, colorOjos, peso, nombre);
        this.estatura = estatura;
        this.colorOjos = colorOjos;
        this.peso = peso;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.email = email;
    }
}
const user1 = new Usuario(90, "azul", 45, "juan", "123456", "email@mail.com");
user1.respirar();
class Producto2 {
    constructor(precio, nombre) {
        this.precio = precio;
        this.nombre = nombre;
    }
}
class Playstation5 extends Producto2 {
    constructor() {
        super(10000, "Playstation 5");
    }
}
class Paginacion {
    constructor(total, cantPaginas, tieneSiguiente, datos) {
        this.total = total;
        this.cantPaginas = cantPaginas;
        this.tieneSiguiente = tieneSiguiente;
        this.datos = datos;
    }
}
// const paginacionUsuarios = new Paginacion<Usuario>();
// const pagiacionProducots = new Paginacion<Producto>();
const myButton = document.querySelector("#butt4on");
