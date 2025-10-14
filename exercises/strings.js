/*a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase). 

b. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
 
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). 
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */


/* a)*/

var pal10, palabra;

pal10 = "kovacevich";

palabra = pal10.toUpperCase();

console.log(palabra)

/* b) */

var p4labra, pal5;

p4labra = "kovacevich";

pal5 = p4labra.substring(0,4);
console.log(pal5)

/* e) */

var texto, posicionEspacio;

texto = "Hola mundo azul";

posicionEspacio = texto.indexOf(" ");

console.log(posicionEspacio);

/* f */

var texto, espacio, palabra1, palabra2, resultado;

texto = "programacion tecnologia";


espacio = texto.indexOf(" ");


palabra1 = texto.substring(0, espacio);
palabra2 = texto.substring(espacio + 1);

palabra1 = palabra1.substring(0,1).toUpperCase() + palabra1.substring(1).toLowerCase();
palabra2 = palabra2.substring(0,1).toUpperCase() + palabra2.substring(1).toLowerCase();

resultado = palabra1 + " " + palabra2;

console.log(resultado);


