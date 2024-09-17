// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// escribe tu respuesta acá
// main function (by me and ia) ===> ganadora
const multiplicarArreglo = array => array.reduce((total, element) => total * element, 1)

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1