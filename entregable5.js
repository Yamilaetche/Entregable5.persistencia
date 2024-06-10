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
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var contPrecios = "";
var contProductos = "";
for (var i = 0; i < precios.length; i++) {
    contPrecios += precios[i] + " ";
    contProductos += productos[i] + " ";
}
//Guarda info en txt
var preciostxt = fs.writeFileSync("./test.txt", contPrecios);
var productostxt = fs.writeFileSync("./test.txt", contProductos);
//lee info de txt
var datosPrecio = fs.readFileSync("./test.txt", "utf8");
var datosPrecio2 = datosPrecio.trim();
var nuevoArray1 = datosPrecio2.split(" ");
var datosProductos = fs.readFileSync("./test.txt", "utf8");
var datosProductos2 = datosProductos.trim();
var nuevoArray2 = datosProductos2.split(" ");
console.log(nuevoArray1);
console.log(nuevoArray2);
