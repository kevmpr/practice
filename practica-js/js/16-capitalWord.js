// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá
//main function (by ia) ===> ganadora
const capitalizar = text => text.charAt(0).toUpperCase() + text.slice(1);

//main function (by me)
const capitalizar2 = text => text !== '' ? text.replace(text[0], text[0].toUpperCase()) : '';

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""