/*Guarda la información de los siguientes arrays:

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.*/

import * as fs from "node:fs";

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contPrecios: string="";
let contProductos: string="";

for (let i: number= 0; i<precios.length; i++){
    contPrecios += precios[i] + " ";
    contProductos += productos[i] + " ";
}

//Guarda info en txt
fs.writeFileSync("./test.txt", contPrecios);
fs.writeFileSync("./test.txt", contProductos);

//lee info de txt
const datosPrecio: string = fs.readFileSync("./test.txt", "utf8");
const datosPrecio2:string = datosPrecio.trim();
const nuevoArray1: string[]= datosPrecio2.split(" ");

const datosProductos: string = fs.readFileSync("./test.txt", "utf8");
const datosProductos2:string = datosProductos.trim();
const nuevoArray2: string[]= datosProductos2.split(" ");
console.log(nuevoArray1);
console.log(nuevoArray2);