// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

// escribe tu función acá
// main function (by ia) ===> ganadora
const numAsteriscos = array => array.filter(element => element === '*').length

// main function (by me)
const numAsteriscos2 = array => array.map(element => element === '*' ? 1 : 0).reduce((total, element) => total += element, 0);

// código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0
