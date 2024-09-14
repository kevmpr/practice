// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

// escribe tu función acá

// main function (by me) ===> ganadora
const capitalizar = text => text
                                .split(' ')
                                .map( word => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ')

// main function (by ia)
const capitalizar2 = text => text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""