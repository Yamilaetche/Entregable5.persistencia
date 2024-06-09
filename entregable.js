"use strict";
/*Guarda la información de los siguientes arrays:

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var contPrecios = "";
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var contProductos = "";
for (var i = 0; i < precios.length; i++) {
    contPrecios += precios[i] + " ";
}
//Guarda info en txt
fs.writeFileSync("./test.txt", contPrecios);
for (var index = 0; index < productos.length; index++) {
    contProductos += productos + " ";
}
//Guarda info en txt
fs.writeFileSync("./test.txt", contProductos);
//lee info de txt
var datosPrecio = fs.readFileSync("./test.txt", "utf8");
var nuevoArray1 = datosPrecio.split(" ");
console.log(nuevoArray1);
var datosProductos = fs.readFileSync("./test.txt", "utf8");
var nuevoArray2 = datosProductos.split(" ");
console.log(nuevoArray2);
