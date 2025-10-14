/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa*/
var palabras = ["Hola", "soy", "Mirko", "y", "estoy", "aprendiendo", "JavaScript"];
var sentence = "";

for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}

alert(sentence);
console.log(sentece);
