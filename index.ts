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

const batman: Superheroe = {
  nombre: "Batman",
  edad: 40,
  superpoderes: ["Rico"],
};

class Producto {
  precio: number;
  marca: string;
  descripcion: string;
  id: number;
  nombre: string;
  constructor(
    precio: number,
    marca: string,
    descripcion: string,
    id: number,
    nombre: string
  ) {
    this.precio = precio;
    this.marca = marca;
    this.descripcion = descripcion;
    this.id = id;
    this.nombre = nombre;
  }
}

class Persona {
  constructor(public nombre: string, public apellido: string) {}
}

class Persona2 {
  public nombre: string;
  public apellido: string;
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const personaA = new Persona2("Marilu", "Dominguez");

personaA.nombre;

const ps5 = new Producto(
  999,
  "Sony",
  "Ps5 para jugar con tus amigos",
  4,
  "Playstation 5"
);

const pcGamer = new Producto(
  999,
  "Cualquiera",
  "PC GAMER 16GB RAM 1TB",
  9,
  "PC GAMER"
);

class Carrito {
  productos: Producto[] = [];

  listarProductos(): void {
    console.log(this.productos);
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}

class Ecommerce {
  productos: Producto[] = [ps5, pcGamer];
  carrito = new Carrito();

  buscarProducto(texto: string): Producto | undefined {
    return this.productos.find((p) => p.nombre.includes(texto));
  }
}

const app = new Ecommerce();

app.carrito.agregarProducto(pcGamer);

interface Animal {
  cantidadPatas: number;
  tienePelo: boolean;
}

class Perro implements Animal {
  cantidadPatas: number;
  tienePelo: boolean;

  constructor(cantidadPatas: number, tienePelo: boolean) {
    this.cantidadPatas = cantidadPatas;
    this.tienePelo = tienePelo;
  }
}

const firulais = new Perro(4, true);

class Humano {
  constructor(
    public estatura: number,
    public colorOjos: string,
    public peso: number,
    public nombre: string
  ) {}

  respirar(): void {}
}

class Usuario extends Humano {
  constructor(
    public estatura: number,
    public colorOjos: string,
    public peso: number,
    public nombre: string,
    public contrasena: string,
    public email: string
  ) {
    super(estatura, colorOjos, peso, nombre);
  }
}

const user1 = new Usuario(90, "azul", 45, "juan", "123456", "email@mail.com");

user1.respirar();

class Producto2 {
  constructor(public precio: number, public nombre: string) {}
}

class Playstation5 extends Producto2 {
  constructor() {
    super(10000, "Playstation 5");
  }
}

class Paginacion<T> {
  constructor(
    public total: number,
    public cantPaginas: number,
    public tieneSiguiente: boolean,
    public datos: T[]
  ) {}
}

// const paginacionUsuarios = new Paginacion<Usuario>();
// const pagiacionProducots = new Paginacion<Producto>();

const myButton = document.querySelector("#butt4on");
