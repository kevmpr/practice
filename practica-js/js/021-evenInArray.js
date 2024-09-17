// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

// escribe tu función acá
// main function (by me and ia) ===> ganadora
const pares = array => array.filter(num => num % 2 === 0)

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []