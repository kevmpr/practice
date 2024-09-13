// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

// escribe tu respuesta acá
//main function (by me and ia) ==> ganadora
const numeroDeCaracteres = (text, char) => text.split(char).length - 1;

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4