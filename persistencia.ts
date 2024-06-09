import * as fs from "node:fs";

//let contenido : string = "Hola amigos";

//fs.writeFileSync("./test.txt", contenido );

const nombres: string[] = ["Juan", "Amalia", "Nicolas", "Carla"];
let contenido: string="";

for(let i:number=0; i< nombres.length; i++){
    contenido += nombres[i] + " ";
}

//Guardar info en txt
fs.writeFileSync("./test.txt", contenido );
console.log("Finalizado");

//leer info de txt
const datos: string = fs.readFileSync("./test.txt", "utf8" );
const datos2: string= datos.trim(); //saca los espacios de adelante y atras 
const nuevoArray: string[] = datos2.split(" ");
console.log(nuevoArray);