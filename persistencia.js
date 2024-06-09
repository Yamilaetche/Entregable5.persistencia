"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var contenido = "Hola amigos";
fs.writeFileSync("./test.txt", contenido);
