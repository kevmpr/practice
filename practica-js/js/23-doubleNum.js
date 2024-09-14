// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

// escribe tu función acá
// main function (by me and ia) ===> ganadora
const duplicar = array => array.map(num => num * 2)

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []